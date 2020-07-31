import axios from "axios";
import { setupCache } from 'axios-cache-adapter'

export const ActionType = {
  IS_FETCHING_POSTS: "IS_FETCHING_POSTS",
  FETCH_POSTS_FAILURE: "FETCH_POSTS_FAILURE",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  SEARCH_POSTS: "SEARCH_POSTS",
  FILTER_ALL_POSTS: "FILTER_ALL_POSTS",
  FILTER_BY_DATE_ASC: "FILTER_BY_DATE_ASC",
  FILTER_BY_DATE_DESC: "FILTER_BY_DATE_DESC",
  FILTER_BY_UPVOTES: "FILTER_BY_UPVOTES"
};

export const isFetchingPost = status => ({
  type: ActionType.IS_FETCHING_POSTS,
  payload: status
});

export const successPosts = posts => ({
  type: ActionType.FETCH_POSTS_SUCCESS,
  payload: posts
});

export const setFetchPostsErrors = error => ({
  type: ActionType.IS_FETCHING_POSTS,
  payload: error
});

export const searchPosts = searchTerm => ({
  type: ActionType.SEARCH_POSTS,
  payload: searchTerm
});

export const filterByDateAsc = () => ({
  type: ActionType.FILTER_BY_DATE_ASC
});

export const filterByDateDesc = () => ({
  type: ActionType.FILTER_BY_DATE_DESC
});

export const filterByPopularity = () => ({
  type: ActionType.FILTER_BY_UPVOTES
});

export const filterAllPosts = filterBy => dispatch => {
  switch (filterBy) {
    case "newest":
      dispatch(filterByDateAsc());
      break;
    case "oldest":
      dispatch(filterByDateDesc());
      break;
    case "popular":
      dispatch(filterByPopularity());
      break;
    default:
      break;
  }
};

const cache = setupCache({
  maxAge: 15 * 60 * 1000
})
 
const api = axios.create({
  adapter: cache.adapter
})

export const fetchPosts = () => dispatch => {
  dispatch(isFetchingPost(true));
  return api
    .get("https://www.reddit.com/.json")
    .then(async(res) => {
      console.log("res.data", res.data.data.children);

      const formattedPostsData = res.data.data.children.map(({ data }) => ({
        title: data.title,
        author: data.author,
        url: data.url,
        created_utc: data.created_utc,
        ups: data.ups,
        subreddit_name_prefixed: data.subreddit_name_prefixed,
        displaying: true
      }));

      dispatch(successPosts(formattedPostsData));
      const length = await cache.store.length()
 
      console.log('Cache store length:', length)
      return res.data;
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      dispatch(isFetchingPost(false));
    });
};

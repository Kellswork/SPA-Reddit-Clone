import axios from "axios";

export const ActionType = {
  IS_FETCHING_POSTS: "IS_FETCHING_POSTS",
  FETCH_POSTS_FAILURE: "FETCH_POSTS_FAILURE",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
};

export const isFetchingPost = (status) => ({
  type: ActionType.IS_FETCHING_POSTS,
  payload: status,
});

export const successPosts = (posts) => ({
  type: ActionType.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const setFetchPostsErrors = (error) => ({
  type: ActionType.IS_FETCHING_POSTS,
  payload: error,
});

export const fetchPosts = () => (dispatch) => {
  dispatch(isFetchingPost(true));
  return axios
    .get("https://www.reddit.com/.json")
    .then((res) => {
      console.log('res.data', res.data.data.children);
      dispatch(successPosts(res.data.data.children));
      
      // dispatch(successPosts(formattedData));
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      // dispatch(error);
    })
    .finally(() => {
      dispatch(isFetchingPost(false));
    });
};
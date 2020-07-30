import axios from "axios";
import {actionType} from './types'


export const isFetchingPost = (status) => ({
  type: actionType.FETCH_POSTS_REQUEST,
  status,
});

export const successPosts = (posts) => ({
  type: actionType.FETCH_POSTS_SUCCESS,
  posts,
});

export const failurePosts = (error) => ({
  type: actionType.FETCH_POSTS_REQUEST,
  error,
});

export const fetchPosts = () => (dispatch) => {
  dispatch(isFetchingPost(true));
  return axios
    .get("https://www.reddit.com/.json")
    .then((res) => {
      console.log(res.data.data.children);
      const response = res.data.data.children
      dispatch(successPosts(response));
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      dispatch(failurePosts(error));
    })
    .finally(() => {
      dispatch(isFetchingPost(false));
    });
};

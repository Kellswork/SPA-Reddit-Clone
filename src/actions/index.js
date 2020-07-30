import axios from "axios";

export const ActionType = {
  FETCH_POSTS_REQUEST: "FETCH_POSTS_REQUEST",
  FETCH_POSTS_FAILURE: "FETCH_POSTS_FAILURE",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
};

export const isFetchingPost = () => {
  return {
    type: ActionType.FETCH_POSTS_REQUEST,
  };
};

export const successPosts = (posts) => {
  return {
    type: ActionType.FETCH_POSTS_SUCCESS,
    posts,
  };
};
export const failurePosts = (error) => {
  return {
    type: ActionType.FETCH_POSTS_REQUEST,
    error,
  };
};

export const fetchPosts = () => {
  return function(dispatch) {
    // dispatch(isFetchingPost());
    return axios
      .get("https://www.reddit.com/.json")
      .then((res) => {
        console.log(res.data);
        debugger;
        dispatch(successPosts(res.data));
        return res.data;
      })
      .catch((error) => {
        console.log(error.data);
        dispatch(error.data.error);
      });
  };
};

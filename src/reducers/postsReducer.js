import { ActionType } from "../actions";

const initialState = {
  isFetching: false,
  posts: [],
  error: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.IS_FETCHING_POSTS:
      return {
        ...state,
        isFetching: action.payload
      };
    case ActionType.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload
      };
    case ActionType.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        posts: action.payload
      };
    case ActionType.SEARCH_POSTS:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (
            !post.title.toLowerCase().includes(action.payload.toLowerCase())
          ) {
            return {
              ...post,
              displaying: false
            };
          }
          return {
            ...post,
            displaying: true
          };
        })
      };
    case ActionType.FILTER_BY_POPULARITY:
      return {
        ...state,
        posts: state.posts.sort((a, b) => b.ups * 1 - a.ups * 1)
      };
    case ActionType.FILTER_BY_DATE_DESC:
      return {
        ...state,
        posts: state.posts.sort((a, b) => a.created_utc - b.created_utc)
      };
    case ActionType.FILTER_BY_DATE_ASC:
      return {
        ...state,
        posts: state.posts.sort((a, b) => b.created_utc - a.created_utc)
      };
    default:
      return state;
  }
};

export default postsReducer;

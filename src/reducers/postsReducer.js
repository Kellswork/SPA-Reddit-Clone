import { ActionType } from '../actions'

const initialState = {
  isFetching: false,
  posts: [],
  error: null
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.IS_FETCHING_POSTS:
      return {
        ...state,
        isFetching: action.payload
      }
    case ActionType.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload
      }
    case ActionType.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        posts: action.payload
      }
    default:
      return state
  }
}

export default postsReducer
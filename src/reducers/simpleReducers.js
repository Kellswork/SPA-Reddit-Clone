import {ActionType} from '../actions'

const initialState = {
  isFetching: false,
  posts: [],
  error: null
}

const simpleReducer = (state=initialState, action) => {
  switch ( action.type) {
    case ActionType.FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true
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
        posts: action.error
      }
      default:
        return state
  }
}

// they are called selectors
export const fetchedPosts = state =>  state.posts
export const isFetchingPosts = state =>  state.isFetching
export const fetchPostsError = state =>  state.error

export default simpleReducer
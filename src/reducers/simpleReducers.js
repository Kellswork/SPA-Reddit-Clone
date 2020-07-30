import { actionType } from '../actions/types'

const initialState = {
  isFetching: false,
  posts: [],
  error: null
}

const simpleReducer = (state=initialState, action) => {
  switch ( action.type) {
    case actionType.FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
      case actionType.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload
      }
      case actionType.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        posts: action.error
      }
      default:
        return state
  }
}

export default simpleReducer
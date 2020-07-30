import {ActionType} from '../actions'
const initialState = {
  
}

const simpleReducer = (state=initialState, action) => {
  switch ( action.type) {
    case ActionType.GET_POSTS:
      return {
        ...state,
        
      }
      default:
        return state
  }
  
}
export default simpleReducer
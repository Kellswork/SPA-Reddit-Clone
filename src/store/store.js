import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import postsReducer from '../reducers/postsReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
})


export const store =
  createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );
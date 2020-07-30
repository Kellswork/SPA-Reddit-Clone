import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import rootReducer from "../reducers/rootReducer";
import simpleReducer from '../reducers/simpleReducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  posts: simpleReducer,
});

export const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

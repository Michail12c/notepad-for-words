import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from 'redux-thunk';
import mainReducer from "./main-reducers";
import headerReducer from "./header-reducer";

let reducers = combineReducers({
  mainPage: mainReducer,
  headerPage: headerReducer
})




let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
import { createStore, combineReducers } from "redux";
import mainReducer from "./main-reducers";
import headerReducer from "./header-reducer";

let reducers = combineReducers({
  mainPage: mainReducer,
  headerPage: headerReducer
})




let store = createStore(reducers);

window.store = store;

export default store;
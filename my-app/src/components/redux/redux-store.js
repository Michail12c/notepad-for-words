import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from 'redux-thunk';
import mainReducer from "./main-reducers";
import headerReducer from "./header-reducer";
import { reducer as formReducer } from 'redux-form';
import storageReducer from "./storage-reducer";

let reducers = combineReducers({
  mainPage: mainReducer,
  headerPage: headerReducer,
  storagePage: storageReducer,
  form: formReducer
})




let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from 'redux-thunk';
import mainReducer from "./main-reducers";
import headerReducer from "./header-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  mainPage: mainReducer,
  headerPage: headerReducer,
  form: formReducer
})




let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
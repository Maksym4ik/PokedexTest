import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import loaderReducer from "./loaderReducer";


//подключение редьюсеров
let reducers = combineReducers({
	loader: loaderReducer
});


//создание *STORE*
let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;

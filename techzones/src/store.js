// import data from './data'
import {applyMiddleware, createStore, compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { productListReducer } from './reducers/productReducers'
import { userSigninReducer } from './reducers/userReducer'
const initialState = {}
const reducer = combineReducers({
    productList: productListReducer,
    userSignin: userSigninReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
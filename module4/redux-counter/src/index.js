import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {combineReducers, createStore} from "redux"
import { counterReducer, loginReducer } from "./redux/reducer"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rootReducer = combineReducers({
  count:counterReducer,
  logged:loginReducer,
})

let myStore = createStore(rootReducer);


root.render(
<Provider store={myStore}>
  <App />
</Provider> 
);


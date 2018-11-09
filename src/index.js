import React from "react";
import { render } from "react-dom";
import "./stylesheets/ui.scss";
import "./stylesheets/index.scss";
import C from "./constants";

import routes from './routes'
import sampleData from './initialState'
import storeFactory from './store'
import { Provider } from 'react-redux'
import { addError } from './actions'


const initialState = localStorage["redux-store"]
  ? JSON.parse(localStorage["redux-store"])
  : sampleData


const handleError = error => {
  store.dispatch(
    addError(error.message)
  )
}
const saveState = () => 
localStorage["redux-store"] = JSON.stringify(store.getState())


const store = storeFactory(initialState)
store.subscribe(saveState)
window.React = React;
window.store = store 


render(
 <Provider store={store}>
 {routes}
 </Provider>,

  document.getElementById("react-container")
);


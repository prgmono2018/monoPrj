import 'regenerator-runtime/runtime'
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./components/App.js";
import Wrapper from "./components/Wrapper.js";
// if you're in create-react-app import the files as:
// import store from "./js/store/index";
// import App from "./js/components/App.jsx";
render(
  <Provider store={store}>
    <Wrapper/>
 </Provider>,
  // The target element might be either root or app,
  // depending on your development environment
  // document.getElementById("app")
  document.getElementById("create-article-form")
);
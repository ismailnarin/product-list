import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/custom.scss";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productList from "./reducers/productList";
import modalReducers from "./reducers/modalReducer";
import { combineReducers } from "redux";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const rootReducer = combineReducers({
  productList: productList,
  modalReducer: modalReducers,
});
const store = configureStore({
  reducer: rootReducer,
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

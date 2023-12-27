import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/custom.scss";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productList from "./reducers/productList";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: productList,
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

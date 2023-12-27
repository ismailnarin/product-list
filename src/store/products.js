import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers";

const store = configureStore({
  reducer: productReducer,
  // Diğer seçenekleri burada yapılandırabilirsiniz: middleware, devTools, vb.
});

export default store;

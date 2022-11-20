import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;

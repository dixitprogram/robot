import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";

export default () => {
  const middleWares = [thunk];
  return createStore(reducer, {}, applyMiddleware(...middleWares));
};

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import rootReducer from "./rootReducer/index";

const composeType = () => {
  if (process.browser) {
    return compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    );
  } else {
    return compose(applyMiddleware(thunk));
  }
};

export const store = createStore(rootReducer, composeType());

const makeStore = () => {
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });

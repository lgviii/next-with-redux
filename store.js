import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import rootReducer from "./rootReducer/index";

const composeType = () => {
  if (process.browser) {
    return compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    return compose(applyMiddleware(thunk));
  }
};

export const makeStore = () => {
  return createStore(rootReducer, composeType());
};

export const wrapper = createWrapper(makeStore, { debug: true });

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
// import rootReducer from "./rootReducer/index";
import rootReducer from "./pagesWithStores/admin/reducer";

// export const makeStore = (context) => {
//   return createStore(rootReducer, context, applyMiddleware(thunk));
// };

export const makeStore = (context) => createStore(rootReducer);

export const wrapper = createWrapper(makeStore, { debug: true });

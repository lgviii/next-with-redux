import { combineReducers } from "redux";
import adminReducer from "../pagesWithStores/admin/reducer";
import termsReducer from "../pagesWithStores/terms/reducer";
import counterReducer from "../pagesWithStores/counter/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  admin: adminReducer,
  terms: termsReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import adminReducer from "../pagesWithStores/admin/reducer";
import termsReducer from "../pagesWithStores/terms/reducer";

const rootReducer = combineReducers({
  admin: adminReducer,
  terms: termsReducer,
});

export default rootReducer;

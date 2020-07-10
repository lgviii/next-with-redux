import { combineReducers } from "redux";
import counterReducer from "../pagesWithStores/counter/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;

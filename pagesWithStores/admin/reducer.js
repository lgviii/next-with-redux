import { LOAD } from "./actions";

let initialState = { app: "init", page: "init" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      console.log("In Load Action");
      console.log(action.payload);
      return { ...state, app: action.payload };
    // case "PAGE":
    //   return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default reducer;

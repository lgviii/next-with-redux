import { CHANGE } from "./actions";

let initialState = { terms: "init terms" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return { ...state, terms: action.payload };
    default:
      return state;
  }
};

export default reducer;

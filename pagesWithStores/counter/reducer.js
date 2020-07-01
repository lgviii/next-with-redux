import { COUNTER_LOAD, COUNTER_INCREMENT } from "./actions";

let initialState = { counterValue: 0, isPageLoading: true };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_LOAD:
      console.log("In Load Action");
      console.log(action.payload);
      return { ...state, counterValue: action.payload, isPageLoading: false };
    case COUNTER_INCREMENT:
      console.log("In Increment Action after API call");
      return { ...state, counterValue: state.counterValue + 1 };
    default:
      return state;
  }
};

export default reducer;

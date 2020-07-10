import {
  COUNTER_LOAD,
  COUNTER_INCREMENT,
  START_LOADING,
  STOP_LOADING,
} from "./actions";

let initialState = {
  counterValue: 0,
  isPageLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_LOAD:
      console.log("In load reducer");
      console.log(action.payload);
      return { ...state, counterValue: action.payload };
    case COUNTER_INCREMENT:
      console.log("In increment reducer");
      return { ...state, counterValue: state.counterValue + 1 };
    case STOP_LOADING:
      console.log("In stop loading reducer");
      return { ...state, isPageLoading: false };
    case START_LOADING:
      console.log("In start loading reducer");
      return { ...state, isPageLoading: true };
    default:
      return state;
  }
};

export default reducer;

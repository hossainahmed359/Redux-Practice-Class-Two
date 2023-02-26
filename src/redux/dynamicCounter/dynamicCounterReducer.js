import { DYNAMIC_DECREMENT, DYNAMIC_INCREMENT } from "./actions";

const initialState = {
  value: 100,
};

const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DYNAMIC_INCREMENT:
      return {
        ...state,
        value: state.value + (action.payload.value || 0),
      };
    case DYNAMIC_DECREMENT:
      return {
        ...state,
        value: state.value - (action.payload.value || 0),
      };

    default:
      return state;
  }
};

export default dynamicCounterReducer;
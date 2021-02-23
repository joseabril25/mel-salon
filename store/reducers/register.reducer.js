import { registerTypes } from "../types";

const initialState = {
  registerPage: 6,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case registerTypes.RGS_SET_PAGE:
      return {
        ...state,
        registerPage: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default registerReducer;

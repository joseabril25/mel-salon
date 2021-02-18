import { applyTypes } from "../types";

const initialState = {
  applyPage: 1,
  modalType: null,
};

const applyReducer = (state = initialState, action) => {
  switch (action.type) {
    case applyTypes.APL_SET_PAGE:
      return {
        ...state,
        applyPage: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default applyReducer;

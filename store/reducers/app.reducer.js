import { appTypes } from "../types";

const initialState = {
  isModalOpen: false,
  modalType: null,
  isSpinning: false,
  spinResult: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.APP_SET_MODAL:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case appTypes.APP_TYPE_MODAL:
      return {
        ...state,
        modalType: action.payload,
      };
    case appTypes.APP_SET_SPINNING:
      return {
        ...state,
        isSpinning: action.payload,
      };
    case appTypes.APP_SET_RESULT:
      return {
        ...state,
        spinResult: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default appReducer;

import { appointmentTypes } from "../types";

const initialState = {
  setError: null,
  appointmentItems: []
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case appointmentTypes.APT_SET_ERROR:
      return {
        ...state,
        setError: action.payload,
      };
    case appointmentTypes.APT_SET_ITEMS:
      return {
        ...state,
        appointmentItems: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default appointmentReducer;

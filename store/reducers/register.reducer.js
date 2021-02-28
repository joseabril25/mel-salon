import { registerTypes } from "../types";

const initialState = {
  registerPage: 1,
  registerFields: {
    username: null,
    email: null,
    password: null,
    phone: null,
    firstName: null,
    lastName: null,
    gender: null,
    dob: null,
    civil: null,
    nationality: null,
    religion: null,
    houseNo: null,
    street: null,
    barangay: null,
    city: null,
    zip: null,
    household: null,
    children: null,
    belowAge: null,
    yearAge: null,
    income: null,
    decision: null,
    contribution: null,
    familiarity: null,
    newsletter: null,
    tandc: null,
  }
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case registerTypes.RGS_SET_PAGE:
      return {
        ...state,
        registerPage: action.payload,
      };
    case registerTypes.RGS_SET_FIELDS: {
      const { key, value } = action.payload;
      return {
        ...state,
        registerFields: {
          ...state.registerFields,
          [key]: value
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default registerReducer;

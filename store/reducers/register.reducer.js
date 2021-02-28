import { registerTypes } from "../types";

const initialState = {
  isRegisterLoading: false,
  registerPage: 1,
  basic: null,
  basicSecond: null,
  location: null,
  preferences: null,
  preferencesSecond: null,
  preferencesThird: null,
  preferencesFourth: null,
  preferencesFive: null,
  regError: null
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case registerTypes.RGS_SET_LOADING:
      return {
        ...state,
        isRegisterLoading: action.payload,
      };
    case registerTypes.RGS_SET_ERROR:
      return {
        ...state,
        regError: action.payload,
      };
    case registerTypes.RGS_SET_PAGE:
      return {
        ...state,
        registerPage: action.payload,
      };
    case registerTypes.RGS_SET_BASIC:
      return {
        ...state,
        basic: action.payload,
      };
    case registerTypes.RGS_SET_BASIC_SEC:
      return {
        ...state,
        basicSecond: action.payload,
      };
    case registerTypes.RGS_SET_LOC:
      return {
        ...state,
        location: action.payload,
      };
    case registerTypes.RGS_SET_PREF:
      return {
        ...state,
        preferences: action.payload,
      };
    case registerTypes.RGS_SET_PREF_SEC:
      return {
        ...state,
        preferencesSecond: action.payload,
      };
    case registerTypes.RGS_SET_PREF_TRI:
      return {
        ...state,
        preferencesThird: action.payload,
      };
    case registerTypes.RGS_SET_PREF_FOU:
      return {
        ...state,
        preferencesFourth: action.payload,
      };
    case registerTypes.RGS_SET_PREF_FIV:
      return {
        ...state,
        preferencesFive: action.payload,
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

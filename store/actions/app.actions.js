import { appTypes } from "../types";


export const toggleModal = (payload) => {
    return {
      type: appTypes.APP_TOGGLE_MODAL,
      payload,
    };
};

export const toggleSpin = (payload) => {
    return {
      type: appTypes.APP_TOGGLE_SPIN,
      payload,
    };
};

export const setSpinResult = (payload) => {
    return {
      type: appTypes.APP_SET_SPIN_RESULT,
      payload,
    };
};
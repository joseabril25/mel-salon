import { registerTypes } from "../types";

export const toggleApplyPages = (payload) => {
    return {
      type: registerTypes.RGS_TOGGLE_PAGE,
      payload,
    };
};

export const handleRegister = (payload) => {
    return {
      type: registerTypes.RGS_HANDLE_SUBMIT,
      payload,
    };
};

export const handleAppointment = (payload) => {
    return {
      type: registerTypes.RGS_HANDLE_APPOINTMENT,
      payload,
    };
};
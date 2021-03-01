import { appointmentTypes } from "../types";

export const toggleApplyPages = (payload) => {
    return {
      type: registerTypes.RGS_TOGGLE_PAGE,
      payload,
    };
};

export const handleGetAppointments = (payload) => {
    return {
      type: appointmentTypes.APT_GET_APPOINTMENT,
      payload,
    };
};

export const handleSetAppointment = (payload) => {
    return {
      type: appointmentTypes.APT_SET_APPOINTMENT,
      payload,
    };
};
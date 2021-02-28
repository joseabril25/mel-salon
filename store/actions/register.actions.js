import { registerTypes } from "../types";

export const toggleApplyPages = (payload) => {
    return {
      type: registerTypes.RGS_TOGGLE_PAGE,
      payload,
    };
};

export const handleSubmit = () => {
    return {
      type: registerTypes.RGS_HANDLE_SUBMIT,
      payload,
    };
};
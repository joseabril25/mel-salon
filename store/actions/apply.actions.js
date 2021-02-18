import { applyTypes } from "../types";

export const toggleApplyPages = (payload) => {
    return {
      type: applyTypes.APL_TOGGLE_PAGE,
      payload,
    };
};
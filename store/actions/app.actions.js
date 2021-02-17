import { appTypes } from "../types";


export const toggleModal = (payload) => {
    return {
      type: appTypes.APP_TOGGLE_MODAL,
      payload,
    };
};
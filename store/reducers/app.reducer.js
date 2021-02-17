import { appTypes } from "../types";

const initialState = {
  isModalOpen: false,
//   hasOnboarding: true,
//   hasEarlyTracked: true,
//   dealsCount: 0,
//   dealsCountIsLoading: false,

//   // Used for reinstallation
//   session: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.APP_SET_MODAL:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default appReducer;

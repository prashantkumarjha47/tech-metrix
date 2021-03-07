import * as CONSTANTS from "./constants";

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case CONSTANTS.SET_HISTORY:
      return {
        ...state,
        history: [payload, ...state.history],
      };
    default:
      return state;
  }
};

export default reducer;

import * as CONSTANTS from "./constants";

export const setHistory = (address) => ({
  type: CONSTANTS.SET_HISTORY,
  payload: address,
});

import * as CONSTANTS from "./constants";
import { setHistory } from "./actions";

const middlewareDispatch = (dispatch) => async (action) => {
  const { type, payload } = action;
  switch (type) {
    case CONSTANTS.SET_HISTORY:
      dispatch(setHistory(payload));
      break;
    default:
      dispatch(action);
      break;
  }
};

export default middlewareDispatch;

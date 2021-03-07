import React, { useReducer } from "react";
import reducer from "./reducer";
import initialState from "./data";
import middlewareDispatch from "./middleware";

const Context = React.createContext();

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const middleware = middlewareDispatch(dispatch);

  return (
    <Context.Provider value={{ state, dispatch: middleware }}>
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };

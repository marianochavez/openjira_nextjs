import { useReducer } from "react";
import { UIContext, uiReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface UIState {
  sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
};

export const UIProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  return (
    <UIContext.Provider
      value={{
        sidemenuOpen: false,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

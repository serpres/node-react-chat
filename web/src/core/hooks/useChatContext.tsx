import * as React from "react";

import { IUser } from "../../types/IUser.interface";

interface IChatState {
  room: string;
  user: IUser;
}

interface IChatContextValue {
  state: IChatState;
  setUser: (user: IUser) => void;
  setRoom: (room: string) => void;
}

const initialState: IChatState = {
  room: "",
  user: { username: "", id: "" },
};

const ChatContext = React.createContext<IChatContextValue | undefined>(
  undefined
);

const ChatContextProvider: React.FC<React.PropsWithChildren> = ({
  ...props
}) => {
  const [state, setState] = React.useState<IChatState>(initialState);

  const setRoom = (room: string) => {
    setState((prev) => ({ ...prev, room }));
  };
  const setUser = (user: IUser) => {
    setState((prev) => ({ ...prev, user }));
  };

  const value = React.useMemo(
    () => ({
      state,
      setRoom,
      setUser,
    }),
    [state]
  );

  return <ChatContext.Provider value={value} {...props} />;
};

function useChatContext() {
  const context = React.useContext(ChatContext);

  let state, setRoom, setUser;

  if (!context)
    console.error(
      "useChatContext context must be used within a ChatContextProvider"
    );
  else {
    state = context.state;
    setRoom = context.setRoom;
    setUser = context.setUser;
  }
  return {
    state,
    setRoom,
    setUser,
  };
}

export { ChatContextProvider, useChatContext };

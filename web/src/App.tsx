import React from "react";
import AppRouter from "./core/routes";

import { ChatContextProvider } from "./core/hooks/useChatContext";

import "antd/dist/antd.css";
import "moment/locale/ru";

function App() {
  return (
    <ChatContextProvider>
      <AppRouter />
    </ChatContextProvider>
  );
}

export default App;

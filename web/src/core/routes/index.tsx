import React, { FC, PropsWithChildren } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import ChatPage from "../../Pages/Chat";
import LoginPage from "../../Pages/Login";

import { useChatContext } from "../hooks/useChatContext";

const PrivateRoutes: FC<PropsWithChildren> = ({ children }) => {
  const { state } = useChatContext();

  if (!state?.room || !state.user.id)
    return <Navigate to="/login" replace={true} />;

  return <Routes>{children}</Routes>;
};

const AppRouter = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<Navigate to="/login" replace={true} />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route
          path={"*"}
          element={
            <PrivateRoutes>
              <Route path={"/chat"} element={<ChatPage />} />
            </PrivateRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;

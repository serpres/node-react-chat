import React, { FC, PropsWithChildren } from "react";
import { SAppWrapper, SGlobalStyle } from "./styles";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SAppWrapper>{children}</SAppWrapper>
      <SGlobalStyle />
    </>
  );
};

export default MainLayout;

import styled, { createGlobalStyle } from "styled-components";

export const SGlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
`;

export const SAppWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 1170px;
  margin: 0 auto;
  @media (max-width: 1170px) {
    width: 720px;
  }
  @media (max-width: 720px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 320px;
  }
`;

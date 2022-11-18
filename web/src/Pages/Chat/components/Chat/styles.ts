import styled from "styled-components";

export const SChat = styled.div`
  border: 1px solid #aaa;
  padding: 0 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 500px) {
    width: 340px;
  }
  .message__container {
    height: calc(100vh - 150px);
    width: 500px;
    overflow: auto;
    padding: 5px 10px;
    @media (max-width: 500px) {
      width: 320px;
    }
  }
  .input-message__wrapper {
    @media (max-width: 500px) {
      width: 320px;
    }
  }
  .message__empty {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

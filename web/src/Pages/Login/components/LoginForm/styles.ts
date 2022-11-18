import { Card } from "antd";
import styled from "styled-components";

export const SCard = styled(Card)`
  width: 500px;
  @media (max-width: 720px) {
    width: 300px;
  }
`;

import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from "./animation";

export const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  padding: 15px;
  margin: 0;
`;

export const ButtonVolver = styled.button`
  padding: 5px;
  background: #1890ff;
  color: white;
  width: 100px;
  border: none;
  cursor: pointer;
`;

export const LinkClass = styled(LinkRouter)`
  background: transparent;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 0px 10px 5px rgba(24, 144, 255, 0.5);
  margin: 20px;
  ${fadeIn({ time: "2s" })};
`;

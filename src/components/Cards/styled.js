import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from "../../styles/animation";

export const LinkClass = styled(LinkRouter)`
  background: transparent;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 0px 10px 5px rgba(24, 144, 255, 0.5);
  margin: 20px;
  ${fadeIn({ time: "1s" })};
`;

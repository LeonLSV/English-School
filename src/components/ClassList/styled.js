import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from "../../styles/animation";

export const Link = styled(LinkRouter)`
  color: black;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  line-height: 35px;
  margin: 10px;

  &[aria-current] {
    color: #1670c2;
    ${fadeIn({ time: "2s" })};
  }
`;

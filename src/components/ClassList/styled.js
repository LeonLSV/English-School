import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from "../../styles/animation";

export const Link = styled(LinkRouter)`
  color: black;
  background: transparent;
  border: none;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  line-height: 35px;

  &[aria-current] {
    color: green;
    ${fadeIn({ time: "1s" })};
  }
`;

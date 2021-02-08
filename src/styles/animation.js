import { keyframes, css } from "styled-components";

const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeIn = ({ time = "2s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

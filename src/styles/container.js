import styled from "styled-components";
import { fadeIn } from "./animation";

export const ContainerLesson = styled.div`
  padding-top: 40px;
  ${fadeIn({ time: "1s" })};
`;

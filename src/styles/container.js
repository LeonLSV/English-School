import styled from "styled-components";
import { fadeIn } from "./animation";

export const ContainerLesson = styled.div`
  margin: 20px;
  ${fadeIn({ time: "1s" })};
`;

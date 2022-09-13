import styled, { css } from "styled-components";
import { Container as SectionWrapper } from "../SectionWrapper/styles";

export const Container = styled.div`
  ${({ visible }) => css`
    height: 100vh;
    transition: transform 0.5s;
    transform: translateX(100%);
    position: absolute;
    top: 0;
    width: 360px;
    ${visible &&
    css`
      transform: translateX(0);
    `}
    ${SectionWrapper} {
      display: flex;
      flex-direction: column;
    }
  `}
`;

export const ItensContainer = styled.div`
  ${() => css`
    overflow-y: auto;
  `}
`;

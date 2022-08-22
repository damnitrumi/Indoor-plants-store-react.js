import styled, { css } from "styled-components";
import { Container as SectionWrapper } from "../SectionWrapper/styles";

export const Container = styled.div`
  ${() => css`
    ${SectionWrapper} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

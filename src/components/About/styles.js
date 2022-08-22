import styled, { css } from "styled-components";
import { Container as SectionWrapper } from "../SectionWrapper/styles";
import { Container as Text } from "../Text/styles";

export const Container = styled.div`
  ${() => css`
    counter-reset: TextCounter;
    ${SectionWrapper} {
      display: flex;
      flex-direction: column;
      gap: 180px;
    }
  `}
`;
export const AboutContainer = styled.div`
  ${({ theme }) => css`
    ${Text}::before {
      content: counter(TextCounter) ".";
      counter-increment: TextCounter;
      font-size: ${theme.font.sizes.large};
      font-family: ${theme.font.family.primary};
      margin-right: ${theme.spacings.small};
      color: ${theme.colors.lightGreen};
    }

    padding: ${theme.spacings.small} 0;
    /* margin-top: 180px; */
    overflow-y: auto;
  `}
`;

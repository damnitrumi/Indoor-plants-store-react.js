import styled, { css } from "styled-components";
import { Container as SectionWrapper } from "../SectionWrapper/styles";
import { Container as Button } from "../Button/styles";
import { Container as Heading } from "../Heading/styles";

export const Container = styled.div`
  ${({ theme, visible }) => css`
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
      > ${Button} {
        text-align: center;
        background-color: ${theme.colors.lightGreen};
        display: block;
        width: 85%;
        margin: 0 auto;
        border-radius: 5px;
        font-size: ${theme.font.sizes.small};
      }

      > ${Heading} {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const ItensContainer = styled.div`
  ${() => css`
    overflow-y: auto;
    flex: 1;
  `}
`;

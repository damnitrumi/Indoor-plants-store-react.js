import styled, { css } from "styled-components";
import { Container as SectionWrapper } from "../SectionWrapper/styles";
import { Container as ImageContainer } from "../ImageContainer/styles";

// export const SectionContainer = styled.div`
//   ${() => css`
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//   `}
// `;

export const Container = styled.div`
  ${({ visible }) => css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    transition: transform 0.5s;
    transform: translateX(-100%);
    position: absolute;
    width: 360px;
    ${visible &&
    css`
      transform: translateX(0);
    `}
    ${SectionWrapper} {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  `}
`;

export const SlidesContainer = styled.div`
  ${() => css`
    /* ${ImageContainer} {
      height: 460px;
    } */
  `}
`;

export const SliderContainer = styled.div`
  ${() => css`
    flex: 1;
  `}
`;

export const BgContainer = styled.span`
  ${({ theme }) => css`
    display: block;
    background-color: ${theme.colors.lightGrey};
    width: 230px;
    height: 300px;
    border-radius: ${theme.spacings.medium};
    position: absolute;
    z-index: -1;
    top: 40px;
  `}
`;

export const DotsContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    gap: 3px;
    position: absolute;
    left: 150px;
    bottom: 290px;
  `}
`;

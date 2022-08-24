import styled, { css } from "styled-components";

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
  `}
`;

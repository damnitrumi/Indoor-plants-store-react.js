import styled, { css } from "styled-components";

const bgChange = (bgUrl) => css`
  background: url(${bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  ${({ theme, bgUrl }) => css`
    height: 100vh;
    border-radius: 5px;
    background: white;
    ${bgUrl && bgChange(bgUrl)}
    padding: ${theme.spacings.large};
  `}
`;

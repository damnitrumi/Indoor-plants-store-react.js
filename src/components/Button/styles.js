import styled, { css } from "styled-components";

export const Container = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${theme.spacings.tiny};
    color: white;
    position: relative;
  `}
`;

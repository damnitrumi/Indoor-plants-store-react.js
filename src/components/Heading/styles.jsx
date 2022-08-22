import styled, { css } from "styled-components";

export const Container = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primary};
    color: ${theme.colors.darkGreen};
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.large};
    text-align: center;
  `}
`;

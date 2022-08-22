import styled, { css } from "styled-components";

export const Container = styled.p`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family.secondary};
    text-align: justify;
  `}
`;

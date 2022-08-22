import styled, { css } from "styled-components";

export const Container = styled.span`
  ${({ theme, current, index }) => css`
    display: inline-block;
    border-radius: 50%;
    height: ${theme.spacings.tiny};
    width: ${theme.spacings.tiny};
    background-color: ${current == index
      ? theme.colors.grey
      : theme.colors.mediumGrey};
  `}
`;

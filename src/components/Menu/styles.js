import styled, { css } from "styled-components";

export const Container = styled.nav`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

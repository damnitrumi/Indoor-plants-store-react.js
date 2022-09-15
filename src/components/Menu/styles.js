import styled, { css } from "styled-components";

export const Container = styled.nav`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const PopUp = styled.span`
  ${() => css`
    display: block;
    position: absolute;
    right: 0;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

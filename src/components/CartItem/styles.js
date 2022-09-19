import styled, { css } from "styled-components";

import { Container as Heading } from "../Heading/styles";
import { Container as Button } from "../Button/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.small};
    ${Heading} {
      margin-bottom: 0;
      font-size: 1.4rem;
      font-family: ${theme.font.family.secondary};
    }
    ${Button} {
      color: initial;
    }
  `}
`;

export const ProductImageContainer = styled.div`
  ${() => css`
    flex: 1;
  `}
`;
export const ProductData = styled.div`
  ${({ theme }) => css`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: ${theme.spacings.large};
  `}
`;

export const NameContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
  `}
`;

export const ProductOptionsContainer = styled.div`
  ${() => css``}
`;

export const QuantityContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${theme.font.sizes.medium};
  `}
`;
export const Quantity = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.3);
    ${Button}:first-of-type {
      border-right: 1px solid rgba(0, 0, 0, 0.3);
    }

    ${Button}:last-of-type {
      border-left: 1px solid rgba(0, 0, 0, 0.3);
    }

    span {
      padding: 0 ${theme.spacings.tiny};
    }
  `}
`;

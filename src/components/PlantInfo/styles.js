import styled, { css } from "styled-components";
import { Container as Heading } from "../Heading/styles";
import { Container as Button } from "../Button/styles";
import { Container as Text } from "../Text/styles";

const activeBtn = () => css`
  display: block;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.grey};
    width: 100%;
    flex: 0.7;
    border-radius: ${theme.spacings.large} ${theme.spacings.large} 0 0;
    padding: ${theme.spacings.large} ${theme.spacings.xlarge};
    display: flex;
    flex-direction: column;
    ${Heading} {
      color: white;
      margin-bottom: 0;
      font-size: ${theme.font.sizes.small};
    }
    > ${Button} {
      text-align: center;
      background-color: ${theme.colors.lightGreen};
      display: block;
      width: 85%;
      margin: 0 auto;
      border-radius: 5px;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const NameContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const TabsWrapper = styled.div`
  ${() => css`
    flex: 1;
    display: flex;
    flex-direction: column;
  `}
`;

export const TabsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 0 ${theme.spacings.tiny};
    position: relative;
  `}
`;

export const Tab = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    ${Text} {
      padding: ${theme.spacings.tiny};
      color: ${theme.colors.mediumGrey};
      font-size: 1.3rem;
      flex: 1;
      max-height: 60px;
      overflow: auto;
    }
  `}
`;

export const PlantBtn = styled(Button)`
  ${({ theme, idBtn, tab }) => css`
    position: relative;
    letter-spacing: 0.05rem;

    &::after {
      display: none;
      content: "";
      background-color: ${theme.colors.mediumGreen};
      width: 100%;
      height: 3px;
      position: absolute;
      left: -1%;
      ${idBtn == tab && activeBtn()}
    }
  `}
`;

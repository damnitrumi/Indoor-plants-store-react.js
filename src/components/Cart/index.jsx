import { SectionWrapper } from "../SectionWrapper";
import { Menu } from "../Menu";
import { Heading } from "../Heading";
import { ImageContainer } from "../ImageContainer";

import * as Styled from "./styles";

import plantsMock from "../utils/plantsMock";

export const Cart = () => {
  return (
    <Styled.Container>
      <SectionWrapper>
        <Menu dark />
        <Styled.ProductContainer>
          <Styled.ProductImageContainer>
            <ImageContainer urlImg={plantsMock[0].image} />
          </Styled.ProductImageContainer>
          <Styled.ProductData>
            <Styled.NameContainer>
              <Heading>Name</Heading>
              <Heading>Price</Heading>
            </Styled.NameContainer>
            <Styled.ProductOptionsContainer>
              <Styled.QuantityContainer></Styled.QuantityContainer>
            </Styled.ProductOptionsContainer>
          </Styled.ProductData>
        </Styled.ProductContainer>
      </SectionWrapper>
    </Styled.Container>
  );
};

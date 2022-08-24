import * as Styled from "./styles";

import { Heading } from "../Heading";
import { ImageContainer } from "../ImageContainer";
import { Button } from "../Button";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import plantsMock from "../utils/plantsMock";

export const CartItem = () => {
  return (
    <Styled.Container>
      <Styled.ProductImageContainer>
        <ImageContainer urlImg={plantsMock[0].image} />
      </Styled.ProductImageContainer>
      <Styled.ProductData>
        <Styled.NameContainer>
          <Heading>Name</Heading>
          <Heading>Price</Heading>
        </Styled.NameContainer>
        <Styled.ProductOptionsContainer>
          <Styled.QuantityContainer>
            <Styled.Quantity>
              <Button onClick={() => console.log("Teste")}>
                <AiOutlineMinus />
              </Button>
              <span>35</span>
              <Button onClick={() => console.log("Teste")}>
                <AiOutlinePlus />
              </Button>
            </Styled.Quantity>
            <Button onClick={() => console.log("Teste")}>
              <TiDeleteOutline style={{ color: "red", fontSize: 25 }} />
            </Button>
          </Styled.QuantityContainer>
        </Styled.ProductOptionsContainer>
      </Styled.ProductData>
    </Styled.Container>
  );
};

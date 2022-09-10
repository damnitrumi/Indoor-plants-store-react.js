import * as Styled from "./styles";
import P from "prop-types";

import { Heading } from "../Heading";
import { ImageContainer } from "../ImageContainer";
import { Button } from "../Button";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

// import plantsMock from "../utils/plantsMock";

export const CartItem = ({ product: { name, price, image, quantity } }) => {
  return (
    <Styled.Container>
      <Styled.ProductImageContainer>
        <ImageContainer urlImg={image} />
      </Styled.ProductImageContainer>
      <Styled.ProductData>
        <Styled.NameContainer>
          <Heading>{name}</Heading>
          <Heading>{price}</Heading>
        </Styled.NameContainer>
        <Styled.ProductOptionsContainer>
          <Styled.QuantityContainer>
            <Styled.Quantity>
              <Button onClick={() => console.log("deduct")}>
                <AiOutlineMinus />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => console.log("add")}>
                <AiOutlinePlus />
              </Button>
            </Styled.Quantity>
            <Button onClick={() => console.log("remove")}>
              <TiDeleteOutline style={{ color: "red", fontSize: 25 }} />
            </Button>
          </Styled.QuantityContainer>
        </Styled.ProductOptionsContainer>
      </Styled.ProductData>
    </Styled.Container>
  );
};

CartItem.propTypes = {
  product: P.shape({
    name: P.string,
    price: P.string,
    details: P.string,
    reviews: P.string,
    about: P.string,
    image: P.string,
    quantity: P.number,
  }).isRequired,
};

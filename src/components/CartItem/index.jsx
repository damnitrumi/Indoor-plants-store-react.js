import * as Styled from "./styles";
import P from "prop-types";

import { Heading } from "../Heading";
import { ImageContainer } from "../ImageContainer";
import { Button } from "../Button";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useCartContext } from "../contexts/CartContext";
import { theme } from "../../styles/theme";
import toast from "react-hot-toast";

// import plantsMock from "../utils/plantsMock";

const notifyRemovedProduct = () =>
  toast("Product Removed from Cart", {
    style: {
      fontSize: `${theme.font.sizes.small}`,
      fontFamily: `${theme.font.family.secondary}`,
    },
    icon: "❌",
  });

export const CartItem = ({ product }) => {
  const [, , incQty, decQty, removeProduct] = useCartContext();

  const disabled = product.quantity == 1 ? true : false;

  return (
    <Styled.Container>
      <Styled.ProductImageContainer>
        <ImageContainer urlImg={product.image} />
      </Styled.ProductImageContainer>
      <Styled.ProductData>
        <Styled.NameContainer>
          <Heading>{product.name}</Heading>
          <Heading>{`R$: ${product.price}`}</Heading>
        </Styled.NameContainer>
        <Styled.ProductOptionsContainer>
          <Styled.QuantityContainer>
            <Styled.Quantity>
              <Button disabled={disabled} onClick={() => decQty(product)}>
                <AiOutlineMinus />
              </Button>
              <span data-testid="quantity">{product.quantity}</span>
              <Button onClick={() => incQty(product)}>
                <AiOutlinePlus />
              </Button>
            </Styled.Quantity>
            <Button
              onClick={() => {
                removeProduct(product);
                notifyRemovedProduct();
              }}
            >
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
    id: P.number,
  }).isRequired,
};

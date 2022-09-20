import * as Styled from "./styles";
// import P from "prop-types";
// import { Toaster } from "react-hot-toast";

import { SectionWrapper } from "../SectionWrapper";
import { Menu } from "../Menu";
import { CartItem } from "../CartItem";
import { useLayoutContext } from "../contexts/LayoutContext";
import { useCartContext } from "../contexts/CartContext";
import { Button } from "../Button";
import { Heading } from "../Heading";

export const Cart = () => {
  const [, , showCart] = useLayoutContext();
  const [cartItems] = useCartContext();

  const calcTotalPrice = () => {
    let totalPrice = "";

    if (cartItems.length > 0) {
      totalPrice = 0;
      for (var i in cartItems) {
        totalPrice += cartItems[i].quantity * parseFloat(cartItems[i].price);
      }
      totalPrice = totalPrice.toFixed(2);
      totalPrice = totalPrice.toString();
    }

    return totalPrice;
  };

  const totalPrice = calcTotalPrice();

  return (
    <Styled.Container visible={showCart}>
      <SectionWrapper>
        <Menu dark />
        <Styled.ItensContainer>
          {cartItems.map((el, i) => {
            return <CartItem product={el} key={i} />;
          })}
        </Styled.ItensContainer>
        {totalPrice && <Heading>{`Total Price: R$${totalPrice}`}</Heading>}
        <Button onClick={() => console.log("Pay method")}>Payment</Button>
      </SectionWrapper>
    </Styled.Container>
  );
};

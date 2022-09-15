import * as Styled from "./styles";
// import P from "prop-types";
// import { Toaster } from "react-hot-toast";

import { SectionWrapper } from "../SectionWrapper";
import { Menu } from "../Menu";
import { CartItem } from "../CartItem";
import { useLayoutContext } from "../contexts/LayoutContext";
import { useCartContext } from "../contexts/CartContext";

export const Cart = () => {
  const [, , showCart] = useLayoutContext();
  const [cartItems] = useCartContext();
  return (
    <Styled.Container visible={showCart}>
      <SectionWrapper>
        {/* <Toaster /> */}
        <Menu dark />
        <Styled.ItensContainer>
          {cartItems.map((el, i) => {
            return <CartItem product={el} key={i} />;
          })}
        </Styled.ItensContainer>
      </SectionWrapper>
    </Styled.Container>
  );
};

// Cart.propTypes = {
//   cartItens: P.array,
// };

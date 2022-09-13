import * as Styled from "./styles";
// import P from "prop-types";

import { SectionWrapper } from "../SectionWrapper";
import { Menu } from "../Menu";
import { CartItem } from "../CartItem";
import { useLayoutContext } from "../contexts/LayoutContext";
import { useCartContext } from "../contexts/CartContext";

export const Cart = () => {
  const [, , showCart] = useLayoutContext();
  const [cartItens] = useCartContext();
  return (
    <Styled.Container visible={showCart}>
      <SectionWrapper>
        <Menu dark />
        <Styled.ItensContainer>
          {cartItens.map((el, i) => {
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

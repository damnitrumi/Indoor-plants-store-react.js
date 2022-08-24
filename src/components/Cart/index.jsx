import { SectionWrapper } from "../SectionWrapper";
import { Menu } from "../Menu";

import * as Styled from "./styles";

import { CartItem } from "../CartItem";
import { useLayoutContext } from "../contexts/LayoutContext";

export const Cart = () => {
  const [, , showCart] = useLayoutContext();
  return (
    <Styled.Container visible={showCart}>
      <SectionWrapper>
        <Menu dark />
        <CartItem />
        <CartItem />
        <CartItem />
      </SectionWrapper>
    </Styled.Container>
  );
};

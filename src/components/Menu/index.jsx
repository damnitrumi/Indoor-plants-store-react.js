import * as Styled from "./styles";
import { Button } from "../Button";
import { ImageContainer } from "../ImageContainer";

import P from "prop-types";
import { useLayoutContext } from "../contexts/LayoutContext";
import { useCartContext } from "../contexts/CartContext";

export const Menu = ({ dark = false }) => {
  const darkIcons = dark ? "dark" : "light";

  const [, catalogVisible, , cartVisible, bothInvisible] = useLayoutContext();
  const [cartItems] = useCartContext();

  return (
    <Styled.Container>
      <Button onClick={catalogVisible}>
        <ImageContainer urlImg={`/assets/images/menu-${darkIcons}.png`} />
      </Button>
      <Button onClick={bothInvisible}>
        <ImageContainer urlImg={`/assets/images/short-logo-${darkIcons}.png`} />
      </Button>
      <Button onClick={cartVisible}>
        {cartItems.length > 0 && (
          <Styled.PopUp aria-label="ItemsQty">{cartItems.length}</Styled.PopUp>
        )}
        <ImageContainer urlImg={`/assets/images/cart-${darkIcons}.png`} />
      </Button>
    </Styled.Container>
  );
};

Menu.propTypes = {
  dark: P.bool,
};

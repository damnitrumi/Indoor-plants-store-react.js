import * as Styled from "./styles";
import { Button } from "../Button";
import { ImageContainer } from "../ImageContainer";

import P from "prop-types";
import { useLayoutContext } from "../contexts/LayoutContext";

export const Menu = ({ dark = false }) => {
  const darkIcons = dark ? "dark" : "light";

  const [, , , catalogVisible] = useLayoutContext();

  return (
    <Styled.Container>
      <Button onClick={catalogVisible}>
        <ImageContainer urlImg={`/assets/images/menu-${darkIcons}.png`} />
      </Button>
      <Button onClick={() => console.log("Teste2")}>
        {" "}
        <ImageContainer urlImg={`/assets/images/short-logo-${darkIcons}.png`} />
      </Button>
      <Button onClick={() => console.log("Teste3")}>
        {" "}
        <ImageContainer urlImg={`/assets/images/cart-${darkIcons}.png`} />
      </Button>
    </Styled.Container>
  );
};

Menu.propTypes = {
  dark: P.bool,
};

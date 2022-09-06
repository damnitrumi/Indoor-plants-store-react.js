import { useState } from "react";
import { createContext } from "react";
import P from "prop-types";
import { useContext } from "react";

const Context = createContext();

export const LayoutContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  const cartVisible = () => {
    if (showCatalog) {
      catalogVisible();
      setTimeout(() => {
        setShowCart((c) => !c);
      }, 500);
      return;
    }

    setShowCart((c) => !c);
  };

  const catalogVisible = () => {
    if (showCart) {
      cartVisible();
      setTimeout(() => {
        setShowCatalog((c) => !c);
      }, 500);
      return;
    }

    setShowCatalog((c) => !c);
  };

  const bothInvisible = () => {
    showCatalog ? catalogVisible() : "";
    showCart ? cartVisible() : "";
  };

  return (
    <Context.Provider
      value={[
        showCatalog,
        catalogVisible,
        showCart,
        cartVisible,
        bothInvisible,
      ]}
    >
      {children}
    </Context.Provider>
  );
};

export const useLayoutContext = () => {
  const context = useContext(Context);

  return [...context];
};

LayoutContextProvider.propTypes = {
  children: P.node.isRequired,
};

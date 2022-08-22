import { useState } from "react";
import { createContext } from "react";
import P from "prop-types";
import { useContext } from "react";

const Context = createContext();

export const LayoutContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  const cartVisible = () => {
    setShowCart((c) => !c);
  };

  const catalogVisible = () => {
    setShowCatalog((c) => !c);
  };

  return (
    <Context.Provider
      value={[showCart, showCatalog, cartVisible, catalogVisible]}
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

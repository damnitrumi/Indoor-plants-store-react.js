import P from "prop-types";

import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [, setDummyQty] = useState(0);
  const [cartItens, setCartItens] = useState([]);

  const addQty = (plant) => {
    plant.quantity += 1;
    setDummyQty((q) => q + 1);
  };

  const deductQty = (plant) => {
    plant.quantity -= 1;
    setDummyQty((q) => q - 1);
  };

  const addItemToCart = (product) => {
    setCartItens((s) => [...s, product]);
  };

  return (
    <Context.Provider value={[cartItens, addItemToCart, addQty, deductQty]}>
      {children}
    </Context.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(Context);

  return [...context];
};

CartContextProvider.propTypes = {
  children: P.node.isRequired,
};

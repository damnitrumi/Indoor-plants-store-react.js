import P from "prop-types";
// import { useEffect } from "react";

import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItens, setCartItens] = useState([]);

  // useEffect(() => {
  //   console.log("Depois do updated");
  //   console.log(cartItens);
  // }, [cartItens]);

  const addQty = (plant) => {
    addItemToCart(plant);
  };

  const deductQty = (plant) => {
    plant.quantity -= 1;
    console.log("Retirei pelo botão de retirar");
  };

  const addItemToCart = (product) => {
    if (cartItens.find((el) => el.id == product.id)) {
      let updatedProduct = {
        ...cartItens[
          cartItens.indexOf(cartItens.find((el) => el.id == product.id))
        ],
        quantity:
          cartItens[
            cartItens.indexOf(cartItens.find((el) => el.id == product.id))
          ].quantity + 1,
      };

      let updatedCartItems = [...cartItens];

      updatedCartItems.splice(
        cartItens.indexOf(cartItens.find((el) => el.id == product.id)),
        1,
        updatedProduct
      );

      console.log(updatedCartItems);

      setCartItens(updatedCartItems);
      return;
    }

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

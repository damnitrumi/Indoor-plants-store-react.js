import P from "prop-types";

import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const incQty = (product) => {
    addItemToCart(product);
  };

  const decQty = (product) => {
    if (cartItems.find((el) => el.id == product.id)) {
      let updatedProduct = {
        ...cartItems[
          cartItems.indexOf(cartItems.find((el) => el.id == product.id))
        ],
        quantity:
          cartItems[
            cartItems.indexOf(cartItems.find((el) => el.id == product.id))
          ].quantity - 1,
      };

      let updatedCartItems = [...cartItems];

      updatedCartItems.splice(
        cartItems.indexOf(cartItems.find((el) => el.id == product.id)),
        1,
        updatedProduct
      );

      setCartItems(updatedCartItems);
    }
  };

  const removeProduct = (product) => {
    let updatedCartItems = [...cartItems];
    updatedCartItems.splice(
      cartItems.indexOf(cartItems.find((el) => el.id == product.id)),
      1
    );
    setCartItems(updatedCartItems);
  };

  const addItemToCart = (product) => {
    if (cartItems.find((el) => el.id == product.id)) {
      let updatedProduct = {
        ...cartItems[
          cartItems.indexOf(cartItems.find((el) => el.id == product.id))
        ],
        quantity:
          cartItems[
            cartItems.indexOf(cartItems.find((el) => el.id == product.id))
          ].quantity + 1,
      };

      let updatedCartItems = [...cartItems];

      updatedCartItems.splice(
        cartItems.indexOf(cartItems.find((el) => el.id == product.id)),
        1,
        updatedProduct
      );

      setCartItems(updatedCartItems);
      return;
    }

    setCartItems((s) => [...s, product]);
  };

  return (
    <Context.Provider
      value={[cartItems, addItemToCart, incQty, decQty, removeProduct]}
    >
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

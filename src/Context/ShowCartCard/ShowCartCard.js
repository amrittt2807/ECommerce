import { createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const ShowCartCard = createContext({
  showDropDown: false,
  setShowDropDown: () => {},
  cartItems: [],
});
export const ShowCartCardProvider = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const value = { showDropDown, setShowDropDown, cartItems, addItemToCart };

  return (
    <ShowCartCard.Provider value={value}>{children}</ShowCartCard.Provider>
  );
};

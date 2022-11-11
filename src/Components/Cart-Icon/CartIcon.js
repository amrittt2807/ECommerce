import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import { ShowCartCard } from "../../Context/ShowCartCard/ShowCartCard";
import "./Cart-Icon.styles.scss";

const CartIcon = () => {
  const { showDropDown, setShowDropDown } = useContext(ShowCartCard);
  const showCartItems = () => setShowDropDown(!showDropDown);
  return (
    <div className="cart-icon-container" onClick={showCartItems}>
      <ShoppingIcon className="shopping-icon"  />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;

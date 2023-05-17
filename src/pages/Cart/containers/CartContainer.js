import CartView from "../components/CartView";
import { useEffect } from "react";

import { useCart } from "hooks";

const CartContainer = () => {
  const {
    cartItems,
    totalPrice,
    cartItemsQuantity,
    cartItemsTotalQuantity,
    changeItemQuantity,
    deleteItemById,
    getCartData,
  } = useCart();

  useEffect(() => {
    getCartData();
  }, [getCartData]);

  return (
    <CartView
      cartItems={cartItems}
      totalPrice={totalPrice}
      cartItemsQuantity={cartItemsQuantity}
      cartItemsTotalQuantity={cartItemsTotalQuantity}
      handleChangeQuantity={changeItemQuantity}
      handleDeleteItem={deleteItemById}
    />
  );
};
export default CartContainer;

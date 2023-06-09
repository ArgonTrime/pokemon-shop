import CartView from "../components/CartView";
import { useEffect } from "react";

import { useCart } from "hooks";

const CartContainer = () => {
  const {
    cartItems,
    totalPrice,
    cartItemsQuantity,
    cartItemsTotalQuantity,
    isEmptyCart,
    changeItemQuantity,
    deleteItemById,
    deleteAllItems,
    getCartData,
    orderPokemon,
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
      isEmptyCart={isEmptyCart}
      handleChangeQuantity={changeItemQuantity}
      handleDeleteItem={deleteItemById}
      handleDeleteAllItems={deleteAllItems}
      handleOrderPokemon={orderPokemon}
    />
  );
};
export default CartContainer;

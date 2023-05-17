import { Link } from "react-router-dom";

import CartItem from "../CartItem";
import TrashBin from "../TrashBin";
import { ROUTE_NAMES } from "routes/routeNames";

import styles from "./style.module.scss";

const CartView = ({
  cartItems,
  totalPrice,
  cartItemsQuantity,
  cartItemsTotalQuantity,
  isEmptyCart,
  handleChangeQuantity,
  handleDeleteItem,
  handleDeleteAllItems,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContant}>
        <div className={styles.headerContant}>
          <h2>Your cart</h2>
          {!isEmptyCart && (
            <p>
              Unique quantity: <span>{cartItemsQuantity}</span> All quantity:{" "}
              <span>{cartItemsTotalQuantity}</span> Price:{" "}
              <span>{`$${totalPrice}`}</span>
            </p>
          )}
        </div>
        {isEmptyCart ? (
          <p>
            Your cart is empty, add pokemons to your cart on the{" "}
            <Link to={ROUTE_NAMES.POKEMONS}>Pokémons page</Link>.
          </p>
        ) : (
          <>
            {cartItems.map(({ id, name, image, quantity, price }) => (
              <CartItem
                id={id}
                name={name}
                image={image}
                quantity={quantity}
                price={price}
                key={id}
                handleChangeQuantity={handleChangeQuantity}
                handleDeleteItem={handleDeleteItem}
              />
            ))}
            <div className={styles.footerContent}>
              <p>Remove all Pokémons from your cart</p>
              <TrashBin
                handleDeleteItem={handleDeleteAllItems}
                payloadForHandle={cartItems}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default CartView;

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

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
  handleOrderPokemon,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContant}>
        <div className={styles.headerContant}>
          <h2>Your cart</h2>
          {!isEmptyCart && (
            <div className={styles.orderInfo}>
              <p>
                Unique quantity: <span>{cartItemsQuantity}</span> All quantity:{" "}
                <span>{cartItemsTotalQuantity}</span> Price:{" "}
                <span>{`$${totalPrice}`}</span>
              </p>
              <Button
                variant="contained"
                color="success"
                size="small"
                onClick={handleOrderPokemon}
              >
                Buy
              </Button>
            </div>
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
CartView.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      _id: PropTypes.string,
    })
  ),
  totalPrice: PropTypes.number.isRequired,
  cartItemsQuantity: PropTypes.number.isRequired,
  cartItemsTotalQuantity: PropTypes.number.isRequired,
  isEmptyCart: PropTypes.bool.isRequired,
  handleChangeQuantity: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  handleDeleteAllItems: PropTypes.func.isRequired,
  handleOrderPokemon: PropTypes.func.isRequired,
};
export default CartView;

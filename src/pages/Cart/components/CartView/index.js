import CartItem from "../CartItem";
import styles from "./style.module.scss";
const CartView = ({
  cartItems,
  totalPrice,
  cartItemsQuantity,
  cartItemsTotalQuantity,
  handleChangeQuantity,
  handleDeleteItem,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContant}>
        <div className={styles.headerContant}>
          <h2>Your cart</h2>
          <p>
            Unique quantity: <span>{cartItemsQuantity}</span> All quantity:{" "}
            <span>{cartItemsTotalQuantity}</span> Price:{" "}
            <span>{`$${totalPrice}`}</span>
          </p>
        </div>
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
      </div>
    </div>
  );
};
export default CartView;

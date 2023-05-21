import { capitalize } from "lodash";
import PropTypes from "prop-types";

import QuantityConrollsPanel from "../QuantityControllsPanel";
import TrashBin from "../TrashBin";

import styles from "./style.module.scss";

const CartItem = ({
  id,
  name,
  image,
  quantity,
  price,
  handleChangeQuantity,
  handleDeleteItem,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.serialNumber}>
        <span>serial number: {id}</span>
      </div>
      <img src={image} alt={name} />
      <span>{capitalize(name)}</span>
      <QuantityConrollsPanel
        id={id}
        quantity={quantity}
        handleChangeQuantity={handleChangeQuantity}
      />
      <span>{`$${price * quantity}`}</span>
      <TrashBin handleDeleteItem={handleDeleteItem} payloadForHandle={id} />
    </div>
  );
};
CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  handleChangeQuantity: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
};
export default CartItem;

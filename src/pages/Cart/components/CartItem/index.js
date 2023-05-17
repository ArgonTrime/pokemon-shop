import { capitalize } from "lodash";

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
export default CartItem;

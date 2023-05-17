import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import styles from "./style.module.scss";

const QuantityConrollsPanel = ({ id, quantity, handleChangeQuantity }) => {
  const isMoreOne = quantity > 1;
  return (
    <div className={styles.wrapper}>
      <Tooltip title="Add">
        <IconButton
          onClick={() => handleChangeQuantity({ id, quantity: ++quantity })}
        >
          <AddIcon color="success" />
        </IconButton>
      </Tooltip>
      {quantity}
      {isMoreOne && (
        <Tooltip title="Remove">
          <IconButton
            onClick={() => handleChangeQuantity({ id, quantity: --quantity })}
          >
            <RemoveIcon color="warning" />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
};
export default QuantityConrollsPanel;

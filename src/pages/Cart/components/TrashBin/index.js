import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";

import { useAlert } from "hooks";
import AlertConfirm from "components/AlertConfirm";
import { alertTextConfig } from "components/AlertConfirm/config";

const TrashBin = ({ handleDeleteItem, payloadForHandle }) => {
  const { open, handleOpen, handleClose, handleConfirmClose } = useAlert(
    handleDeleteItem,
    payloadForHandle
  );
  return (
    <>
      <Tooltip title="Delete">
        <IconButton onClick={handleOpen}>
          <DeleteIcon color="warning" />
        </IconButton>
      </Tooltip>
      <AlertConfirm
        text={alertTextConfig.deleteItem}
        fontFamily="Roboto Slab"
        openAlert={open}
        handleClose={handleClose}
        handleSomething={handleConfirmClose}
      />
    </>
  );
};
TrashBin.propTypes = {
  handleDeleteItem: PropTypes.func,
  // payloadForHandle: PropTypes.oneOf([
  //   PropTypes.number,
  //   PropTypes.arrayOf(PropTypes.instanceOf(Promise)),
  // ]),
};
export default TrashBin;

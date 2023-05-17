import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import { useAlert } from "hooks";
import AlertConfirm from "components/AlertConfirm";
import { alertTextConfig } from "components/AlertConfirm/config";

const TrashBin = ({ id, handleDeleteItem }) => {
  const { open, handleOpen, handleClose, handleConfirmClose } = useAlert(
    handleDeleteItem,
    id
  );
  return (
    // <>
    //   <Tooltip title="Delete">
    //     <IconButton onClick={() => handleDeleteItem(id)}>
    //       <DeleteIcon color="warning" />
    //     </IconButton>
    //   </Tooltip>
    //   <AlertConfirm text={alertTextConfig.deleteItem} />
    // </>
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
export default TrashBin;

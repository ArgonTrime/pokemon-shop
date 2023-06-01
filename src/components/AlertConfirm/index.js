import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";

const AlertConfirm = ({
  text,
  fontFamily,
  openAlert,
  handleClose,
  handleSomething,
}) => {
  const { title, description } = text;
  return (
    <Dialog
      open={openAlert}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ fontFamily: "Roboto Slab" }}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ fontFamily: { fontFamily } }}
        >
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleSomething();
            handleClose();
          }}
          color="success"
          sx={{ fontFamily: { fontFamily } }}
        >
          Yes
        </Button>
        <Button
          onClick={handleClose}
          color="warning"
          sx={{ fontFamily: { fontFamily } }}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};
AlertConfirm.propTypes = {
  text: PropTypes.objectOf(PropTypes.string).isRequired,
  fontFamily: PropTypes.string,
  openAlert: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSomething: PropTypes.func,
};
export default AlertConfirm;

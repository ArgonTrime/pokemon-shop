import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton, Tooltip } from "@mui/material";
import PropTypes from "prop-types";

const LogOutButton = ({ handleClick }) => {
  return (
    <Tooltip title="Log Out">
      <IconButton
        aria-label="logOut"
        size="Large"
        onClick={handleClick}
        sx={{
          color: "#FFF",
        }}
      >
        <LogoutIcon />
      </IconButton>
    </Tooltip>
  );
};
LogOutButton.propTypes = {
  handleClick: PropTypes.func,
};
export default LogOutButton;

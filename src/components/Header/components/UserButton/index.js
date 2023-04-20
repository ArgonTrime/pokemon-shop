import PersonIcon from "@mui/icons-material/Person";
import { IconButton, Tooltip } from "@mui/material";
import PropTypes from "prop-types";

const UserButton = ({ handleClick }) => {
  return (
    <Tooltip title="Profile">
      <IconButton
        aria-label="profile"
        size="Large"
        onClick={handleClick}
        sx={{
          color: "#FFF",
        }}
      >
        <PersonIcon />
      </IconButton>
    </Tooltip>
  );
};
UserButton.propTypes = {
  handleClick: PropTypes.func,
};
export default UserButton;

import PersonIcon from "@mui/icons-material/Person";
import { IconButton, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserButton = ({ handleClick }) => {
  return (
    <Tooltip title="Profile">
      <Link to="/profile">
        <IconButton
          aria-label="profile"
          size="Large"
          // onClick={handleClick}
          sx={{
            color: "#FFF",
          }}
        >
          <PersonIcon />
        </IconButton>
      </Link>
    </Tooltip>
  );
};
UserButton.propTypes = {
  handleClick: PropTypes.func,
};
export default UserButton;

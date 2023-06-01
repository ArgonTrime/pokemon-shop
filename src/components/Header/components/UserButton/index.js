import PersonIcon from "@mui/icons-material/Person";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const UserButton = () => {
  return (
    <Tooltip title="Profile">
      <Link to="/profile">
        <IconButton
          aria-label="profile"
          size="Large"
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
export default UserButton;

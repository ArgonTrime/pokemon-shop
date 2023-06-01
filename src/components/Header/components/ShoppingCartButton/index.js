import { IconButton, Tooltip, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const ShoppingCartButton = ({ count, handleClick }) => {
  return (
    <Tooltip title="Shopping Cart">
      <Link to="/cart">
        <IconButton
          aria-label="cart"
          size="Large"
          onClick={handleClick}
          sx={{ color: "#FFF" }}
        >
          <StyledBadge badgeContent={count} color="success">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Link>
    </Tooltip>
  );
};
ShoppingCartButton.propTypes = {
  count: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
};
export default ShoppingCartButton;

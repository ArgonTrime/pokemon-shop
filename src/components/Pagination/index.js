import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";

const CustomPagination = ({ startPage, countPage = 3, handleChange }) => {
  return (
    <Pagination
      count={countPage}
      defaultPage={startPage}
      color="primary"
      variant="outlined"
      shape="rounded"
      showFirstButton
      showLastButton
      onChange={handleChange}
    />
  );
};
CustomPagination.propTypes = {
  startPage: PropTypes.number,
  countPage: PropTypes.number,
  handleChange: PropTypes.func,
};
export default CustomPagination;

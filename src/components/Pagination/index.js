import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";

const CustomPagination = ({
  startPage = 1,
  countPage = 3,
  page,
  handleChange,
}) => {
  return (
    <Pagination
      page={page}
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
  page: PropTypes.number.isRequired,
  startPage: PropTypes.number,
  countPage: PropTypes.number,
  handleChange: PropTypes.func,
};
export default CustomPagination;

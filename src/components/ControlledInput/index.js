import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import startCase from "lodash/startCase";

const ControlledInput = ({
  name,
  label,
  value,
  error,
  helperText,
  type,
  variant,
  size,
  width = 100,
  onChange,
}) => {
  return (
    <>
      <TextField
        name={name}
        label={startCase(label)}
        value={value}
        error={error}
        helperText={helperText}
        type={type}
        variant={variant}
        size={size}
        sx={{ width: `${width}%` }}
        onChange={onChange}
      />
    </>
  );
};
ControlledInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]).isRequired,
  size: PropTypes.oneOf(["small", "medium"]).isRequired,
  width: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default ControlledInput;

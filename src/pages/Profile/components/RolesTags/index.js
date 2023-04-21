import PropTypes from "prop-types";

import styles from "./styler.module.scss";

const RolesTags = ({ roles }) => {
  return (
    <div className={styles.wrapper}>
      {roles.map((role) => (
        <span key={role} className={styles.role}>{`#${role}`}</span>
      ))}
    </div>
  );
};
RolesTags.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default RolesTags;

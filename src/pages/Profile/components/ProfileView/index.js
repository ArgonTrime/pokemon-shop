import FaceIcon from "@mui/icons-material/Face";
import Face2Icon from "@mui/icons-material/Face2";
import { capitalize } from "lodash";
import PropTypes from "prop-types";

import RolesTags from "../RolesTags";

import styles from "./style.module.scss";

const ProfileView = ({ profileData }) => {
  const { gender, firstName, lastName, email, phone, roles } = profileData;
  return (
    <div className={styles.wrapper}>
      <div className={styles.profileInfo}>
        <h3> {`${capitalize(firstName)} ${capitalize(lastName)}`}</h3>
        {gender === "male" || gender === "Male" ? (
          <FaceIcon sx={{ width: "100px", height: "100px" }} />
        ) : (
          <Face2Icon sx={{ width: "100px", height: "100px" }} />
        )}
        <p>
          <span>email:</span> {email} <span>phone:</span> {phone}
        </p>
        <RolesTags roles={roles} />
      </div>
    </div>
  );
};
ProfileView.propTypes = {
  profileData: PropTypes.shape({
    address: PropTypes.objectOf(PropTypes.string),
    email: PropTypes.string,
    firstName: PropTypes.string,
    gender: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string),
  }),
};
export default ProfileView;

import FaceIcon from "@mui/icons-material/Face";
import Face2Icon from "@mui/icons-material/Face2";
import Box from "@mui/material/Box";
import { capitalize } from "lodash";
import PropTypes from "prop-types";

import RolesTags from "../RolesTags";
import ProgressBar from "components/ProgressBar";
import OrderInfo from "../OrderInfo";

import styles from "./style.module.scss";

const ProfileView = ({ profileData, isLoadingOrders, profileOrders }) => {
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
          email: <span> {email}</span>
        </p>
        <p>
          phone: <span> {phone}</span>
        </p>
        <RolesTags roles={roles} />
      </div>
      {isLoadingOrders && <ProgressBar />}
      <Box maxWidth="1200px">
        {profileOrders.map(({ totalPrice, itemsList, createdAt, _id }) => (
          <OrderInfo
            createdAt={createdAt}
            totalPrice={totalPrice}
            key={_id}
            ordersList={itemsList}
          />
        ))}
      </Box>
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

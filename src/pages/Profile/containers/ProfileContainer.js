import { useSelector } from "react-redux";
import { omit } from "lodash";

import { accountDataSelector } from "pages/SignIn/selectors";
import ProfileView from "../components/ProfileView";

const ProfileContainer = () => {
  const profileData = useSelector(accountDataSelector);

  return <ProfileView profileData={omit(profileData, ["__v", "_id"])} />;
};
export default ProfileContainer;

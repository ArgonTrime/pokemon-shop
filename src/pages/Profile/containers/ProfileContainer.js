import { useSelector } from "react-redux";

import { accountDataSelector } from "pages/SignIn/selectors";
import ProfileView from "../components/ProfileView";

const ProfileContainer = () => {
  const profileData = useSelector(accountDataSelector);

  return <ProfileView profileData={profileData} />;
};
export default ProfileContainer;

import { useDispatch, useSelector } from "react-redux";
import { omit } from "lodash";

import { accountDataSelector } from "pages/SignIn/selectors";
import ProfileView from "../components/ProfileView";
import { isLoadingOrdersSelector, ordersSelector } from "../selectors";
import { useEffect } from "react";
import { getOrderThunk } from "pages/Cart/api/thunks/getOrders";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const profileData = useSelector(accountDataSelector);
  const profileOrders = useSelector(ordersSelector);
  const isLoading = useSelector(isLoadingOrdersSelector);

  useEffect(() => {
    dispatch(getOrderThunk());
  }, [dispatch]);

  return (
    <ProfileView
      profileData={omit(profileData, ["__v", "_id"])}
      profileOrders={profileOrders}
      isLoadingOrders={isLoading}
    />
  );
};
export default ProfileContainer;

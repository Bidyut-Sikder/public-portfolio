import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterDashboard from "../layout/MasterDashboard";

// const ProfileSettingComponent = React.lazy(() =>
//   import("../components/ProfileSettingComponent")
// );
const ProfileSetting = () => {
  return (
    <Fragment>
      <MasterDashboard>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Profile Setting || Web Application Specialist</title>
            <meta
              name="description"
              content="amitjs || Web Application Specialist"
            />
          </Helmet>
          {/* <ProfileSettingComponent /> */}
        </Suspense>
      </MasterDashboard>
    </Fragment>
  );
};

export default ProfileSetting;

import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterDashboard from "../layout/MasterDashboard";

// const DashboardHomeComponent = React.lazy(() =>
//   import("../components/DashboardHomeComponent")
// );
const DashboardHome = () => {
  return (
    <Fragment>
      <MasterDashboard>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Dashboard || Web Application Specialist</title>
            <meta
              name="description"
              content="bidyutsikder || Web Application Specialist"
            />
          </Helmet>
          {/* <DashboardHomeComponent /> */}
        </Suspense>
      </MasterDashboard>
    </Fragment>
  );
};

export default DashboardHome;

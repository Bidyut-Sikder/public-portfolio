import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterDashboard from "../layout/MasterDashboard";

// const AllMassageComponent = React.lazy(() =>
//   import("../components/AllMassageComponent")
// );
const AllMassage = () => {
  return (
    <Fragment>
      <MasterDashboard>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>All Message || Web Application Specialist</title>
            <meta
              name="description"
              content="bidyutsikder || Web Application Specialist"
            />
          </Helmet>
          {/* <AllMassageComponent /> */}
        </Suspense>
      </MasterDashboard>
    </Fragment>
  );
};

export default AllMassage;

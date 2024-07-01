import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterDashboard from "../layout/MasterDashboard";

// const AllProjectComponent = React.lazy(() =>
//   import("../components/AllProjectComponent")
// );
const AllProject = () => {
  return (
    <Fragment>
      <MasterDashboard>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>All Projects || Web Application Specialist</title>
            <meta
              name="description"
              content="amitjs || Web Application Specialist"
            />
          </Helmet>
          {/* <AllProjectComponent /> */}
        </Suspense>
      </MasterDashboard>
    </Fragment>
  );
};

export default AllProject;

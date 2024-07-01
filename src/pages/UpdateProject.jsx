import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterDashboard from "../layout/MasterDashboard";

// const UpdateProjectComponent = React.lazy(() =>
//   import("../components/UpdateProjectComponent")
// );
const UpdateProject = () => {
  return (
    <Fragment>
      <MasterDashboard>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Update Project || Web Application Specialist</title>
            <meta
              name="description"
              content="amitjs || Web Application Specialist"
            />
          </Helmet>
          {/* <UpdateProjectComponent /> */}
        </Suspense>
      </MasterDashboard>
    </Fragment>
  );
};

export default UpdateProject;

import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterDashboard from "../layout/MasterDashboard";

// const CreateProjectComponent = React.lazy(() =>
//   import("../components/CreateProjectComponent")
// );
const CreateProject = () => {
  return (
    <Fragment>
      <MasterDashboard>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Home || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="NetGrid - React Portfolio Template"
            />
          </Helmet>
          {/* <CreateProjectComponent /> */}
        </Suspense>
      </MasterDashboard>
    </Fragment>
  );
};

export default CreateProject;

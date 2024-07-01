import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";
const ProjectsDetailsComponent = React.lazy(() =>
  import("../components/ProjectsDetailsComponent")
);
const ProjectDetails = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Project Details || Web Application Specialist</title>
            <meta
              name="description"
              content="amitjs || Web Application Specialist"
            />
          </Helmet>
          <ProjectsDetailsComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ProjectDetails;

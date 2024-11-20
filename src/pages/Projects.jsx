import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";

const ProjectsComponent = React.lazy(() =>
  import("../components/ProjectsComponent")
);
const Projects = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Project || Web Application Specialist</title>
            <meta
              name="description"
              content="bidyutsikder || Web Application Specialist"
            />
          </Helmet>
          <ProjectsComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Projects;

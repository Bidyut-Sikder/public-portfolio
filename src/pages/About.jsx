import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";

const AboutComponent = React.lazy(() => import("../components/AboutComponent"));
const About = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>About || Web Application Specialist</title>
            <meta
              name="description"
              content="bidyutsikder || Web Application Specialist"
            />
          </Helmet>
          <AboutComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default About;

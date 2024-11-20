import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";
const TestimonialComponent = React.lazy(() =>
  import("../components/TestimonialComponent")
);
const Testimonial = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Testimonial || Web Application Specialist</title>
            <meta
              name="description"
              content="bidyutsikder || Web Application Specialist"
            />
          </Helmet>
          <TestimonialComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Testimonial;

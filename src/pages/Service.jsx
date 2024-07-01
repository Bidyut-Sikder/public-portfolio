import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";
const ServiceComponent = React.lazy(() =>
  import("../components/ServiceComponent")
);
const Service = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Service || Web Application Specialist</title>
            <meta
              name="description"
              content="amitjs || Web Application Specialist"
            />
          </Helmet>
          <ServiceComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Service;

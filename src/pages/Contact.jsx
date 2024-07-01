import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";
const ContactComponent = React.lazy(() =>
  import("../components/ContactComponent")
);
const Contact = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Contact || Web Application Specialist</title>
            <meta
              name="description"
              content="amitjs || Web Application Specialist"
            />
          </Helmet>
          <ContactComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Contact;

import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterDashboard from "../layout/MasterDashboard";

// const UpdateBlogComponent = React.lazy(() =>
//   import("../components/UpdateBlogComponent")
// );
const UpdateBlog = () => {
  return (
    <Fragment>
      <MasterDashboard>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Update Blog || Web Application Specialist</title>
            <meta
              name="description"
              content="amitjs || Web Application Specialist"
            />
          </Helmet>
          {/* <UpdateBlogComponent /> */}
        </Suspense>
      </MasterDashboard>
    </Fragment>
  );
};

export default UpdateBlog;

import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterDashboard from "../layout/MasterDashboard";

// const AllBlogComponent = React.lazy(() =>
//   import("../components/AllBlogComponent")
// );
const AllBlog = () => {
  return (
    <Fragment>
      <MasterDashboard>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>All Blog || Web Application Specialist</title>
            <meta
              name="description"
              content="amitjs || Web Application Specialist"
            />
          </Helmet>
          {/* <AllBlogComponent /> */}
        </Suspense>
      </MasterDashboard>
    </Fragment>
  );
};

export default AllBlog;

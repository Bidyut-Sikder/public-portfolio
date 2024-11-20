import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterDashboard from "../layout/MasterDashboard";

// const CreateBlogComponent = React.lazy(() =>
//   import("../components/CreateBlogComponent")
// );
const CreateBlog = () => {
  return (
    <Fragment>
      <MasterDashboard>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Create Blog || Web Application Specialist</title>
            <meta
              name="description"
              content="bidyutsikder || Web Application Specialist"
            />
          </Helmet>
          {/* <CreateBlogComponent /> */}
        </Suspense>
      </MasterDashboard>
    </Fragment>
  );
};

export default CreateBlog;

import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";
const BlogDetailsComponent = React.lazy(() =>
  import("../components/BlogDetailsComponent")
);
const BlogDetails = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Blog Details || Web Application Specialist</title>
            <meta
              name="description"
              content="bidyutsikder || Web Application Specialist"
            />
          </Helmet>
          <BlogDetailsComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default BlogDetails;

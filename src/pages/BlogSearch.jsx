import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";
// const BlogSearchComponent = React.lazy(() =>
//   import("../components/BlogSearchComponent")
// );
const BlogSearch = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Blog Search || Web Application Specialist</title>
            <meta
              name="description"
              content="amitjs || Web Application Specialist"
            />
          </Helmet>
          {/* <BlogSearchComponent /> */}
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default BlogSearch;

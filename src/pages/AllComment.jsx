import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterDashboard from "../layout/MasterDashboard";

// const AllCommentComponent = React.lazy(() =>
//   import("../components/AllCommentComponent")
// );
const AllComment = () => {
  return (
    <Fragment>
      <MasterDashboard>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>All Comments || Web Application Specialist</title>
            <meta
              name="description"
              content="bidyutsikder || Web Application Specialist"
            />
          </Helmet>
          {/* <AllCommentComponent /> */}
        </Suspense>
      </MasterDashboard>
    </Fragment>
  );
};

export default AllComment;

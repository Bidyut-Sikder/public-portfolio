import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";

// const LoginComponent = React.lazy(() => import("../components/LoginComponent"));
const Login = () => {
  return (
    <Fragment>
      <Suspense fallback={<FullScreenLoader />}>
        <Helmet>
          <title>Login || Web Application Specialist</title>
          <meta
            name="description"
            content="amitjs || Web Application Specialist"
          />
        </Helmet>
        {/* <LoginComponent /> */}
      </Suspense>
    </Fragment>
  );
};

export default Login;

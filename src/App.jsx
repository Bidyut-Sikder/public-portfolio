




import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import RouteScrollToTop from "./layout/RouteScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import DashboardHome from "./pages/DashboardHome";
import CreateBlog from "./pages/CreateBlog";
import AllBlog from "./pages/AllBlog";
import UpdateBlog from "./pages/UpdateBlog";
import AllComment from "./pages/AllComment";
import AllMassage from "./pages/AllMassage";
import CreateProject from "./pages/CreateProject";
import AllProject from "./pages/AllProject";
import UpdateProject from "./pages/UpdateProject";
import ProfileSetting from "./pages/ProfileSetting";
import Login from "./pages/Login";
import store from "./Redux/Store/Store";
import BlogSearch from "./pages/BlogSearch";
import PrivateRoutes from "./Helpers/PrivateRoutes";
import { useEffect } from "react";
import { preToast } from "./Helpers/SessionHelper";

function App() {
  let switchDark = localStorage.getItem("switchDark");
  useEffect(() => {
    if (switchDark === null) {
      preToast();
    }
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouteScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/projects/:pageNo" element={<Projects />} />
          <Route exact path="/projects-details/:id" element={<ProjectDetails />}
          />
          <Route exact path="/blog/:pageNo" element={<Blog />} />
          <Route
            exact
            path="/blog/search/:search/:pageNo"
            element={<BlogSearch />}
          />
          <Route exact path="/blog-details/:id" element={<BlogDetails />} />
          <Route exact path="/testimonial" element={<Testimonial />} />
          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route exact path="/dashboard-home" element={<DashboardHome />} />
            <Route exact path="/create-blog" element={<CreateBlog />} />
            <Route exact path="/all-blog/:pageNo" element={<AllBlog />} />
            <Route exact path="/update-blog/:id" element={<UpdateBlog />} />
            <Route exact path="/all-comment/:pageNo" element={<AllComment />} />
            <Route exact path="/all-message/:pageNo" element={<AllMassage />} />
            <Route exact path="/create-project" element={<CreateProject />} />
            <Route exact path="/all-project/:pageNo" element={<AllProject />} />
            <Route
              exact
              path="/update-project/:id"
              element={<UpdateProject />}
            />
            <Route exact path="/profile-setting" element={<ProfileSetting />} />
          </Route>
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;






















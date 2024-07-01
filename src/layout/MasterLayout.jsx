import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import {

  FaFacebookF,
  FaGit,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMedium,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
// import ReactTyped from "react-typed";
import { ReactTyped } from "react-typed";
import { cvToast } from "../Helpers/SessionHelper";

import logo from '..//assets/images/LOGO.png'

const MasterLayout = (props) => {


  const [sidebar, setSidebar] = useState(false);

  const dark = localStorage.getItem("theme"); //"dark"
  // const dark = "dark"


  const darkControl = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme");
      window.location.reload();
    } else {
      localStorage.setItem("theme", "dark");
      window.location.reload();
    }
  };

  const sidebarControl = () => {
    setSidebar(!sidebar);
  };
  //https://avatars.githubusercontent.com/u/89535239?v=4
  return (
    <>
      <div className={dark === "dark" ? "dark" : "bg-bodyWhite"}>
        {/* Header Section */}
        <header>
          <div className=" container mx-auto pt-[30px] ">
            {/* <div className={`flex justify-between rounded-[10px] bg-black  py-[20px] dark:bg-card `}> */}
            <div className=" flex justify-between rounded-[10px] bg-white py-[20px] dark:bg-card ">
              <div className="logo flex items-center px-[30px]">
                <Link to={"/"}>
                  {/* <img
                    src={
                      dark === "dark"
                        ? "/assets/images/logo.svg "
                        : "/assets/images/logo-dark.svg"
                    }
                    alt=""
                  /> */}


                  <img
                    src={
                      dark === "dark"
                        ? logo
                        : logo
                    }
                    alt=""
                  />



                  {/* <img
                    src={
                      dark === "dark"
                        ? "https://amitjs.com/assets/images/logo.svg "
                        : "/assets/images/logo-dark.svg"
                    }
                    alt=""
                  /> */}

                </Link>
              </div>
              <menu className="hidden items-center md:flex">
                <ul className="flex  gap-4">
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive
                          ? "font-semibold text-theme "
                          : "font-semibold text-text transition-all duration-300 hover:text-btn dark:hover:text-white"
                      }
                      to={"/"}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive
                          ? "font-semibold text-theme"
                          : "font-semibold text-text transition-all duration-300 hover:text-btn dark:hover:text-white"
                      }
                      to={"/about"}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="w-[100px]">
                    <NavLink
                      className={(navData) =>
                        navData.isActive
                          ? "font-semibold text-theme"
                          : "font-semibold text-text transition-all duration-300 hover:text-btn dark:hover:text-white"
                      }
                      to={"/contact"}
                    >
                      <ReactTyped
                        strings={[" Hire Me!", "Need Help?", "Contact Now"]}
                        typeSpeed={200}
                        backSpeed={100}
                        backDelay={1}
                        loop
                        smartBackspace
                      />
                    </NavLink>
                  </li>
                </ul>
              </menu>
              <div className="flex items-center">
                <div className="flex items-center gap-4	 px-[30px]">
                  <button
                    className="hidden items-center gap-3 md:flex "
                    onClick={darkControl}
                  >
                    <p>
                      <span className="text-btn dark:text-theme ">Dark</span>
                      <span className="text-btn dark:text-white"> / </span>
                      <span className="text-theme dark:text-white">Light</span>
                    </p>
                    <div>
                      <img src="https://amitjs.com/assets/images/icon/sun.svg" alt="" />
                    </div>
                  </button>
                  <button
                    onClick={sidebarControl}
                    className="rounded-full border border-[#919295] p-[10px] text-[25px] "
                  >
                    <BiMenuAltRight className="text-text dark:text-text" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* sidebar intro */}
        <div
          className={
            sidebar
              ? "sidebar fixed left-0 top-0 z-[999] h-screen w-full bg-btn/60 transition-all duration-500"
              : "sidebar fixed left-[100%] top-0 z-[999] h-screen w-full bg-btn/60 transition-all duration-500"
          }
        >
          <div className="ml-auto h-screen w-[300px] bg-white px-[30px] pt-[60px] dark:bg-card">
            <div className="relative flex justify-center">
              <button
                onClick={sidebarControl}
                className="group absolute left-[-78px] rounded-lg bg-white px-[15px]  py-[10px] text-[26px] dark:bg-card"
              >
                <FaXmark className="text-btn transition-all duration-500 group-hover:rotate-90  dark:text-white dark:group-hover:text-theme" />
              </button>
              <div>
                <img
                  src={
                    dark === "dark"
                      ? "/assets/images/logo.svg"
                      : "/assets/images/logo-dark.svg"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="my-[30px] border-t border-[#ddd] dark:border-btn"></div>
            <nav className="mt-[30px]">
              <ul>
                <li className="text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/about"}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/projects/1"}
                  >
                    Projects
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/blog/1"}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/service"}
                  >
                    Services
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/testimonial"}
                  >
                    Testimonial
                  </NavLink>
                </li>
                <li className=" text-[18px] font-semibold">
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    to={"/contact"}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            {/* <div className="my-[30px] border-t border-[#ddd] dark:border-btn"></div> */}
            <button
              onClick={darkControl}
              className="my-[30px] inline-block cursor-pointer"
            >
              <div className="flex  items-center gap-4 md:hidden">
                <div>
                  <p>
                    <span className="text-btn dark:text-theme ">Dark</span>
                    <span className="text-btn dark:text-white"> / </span>
                    <span className="text-theme dark:text-white">Light</span>
                  </p>
                </div>
                <div>
                  <img src="/assets/images/icon/sun.svg" alt="" />
                </div>
              </div>
            </button>
            <div className="contact absolute bottom-[30px] mt-[10px]">
              <div>
                <p className="text-[20px] font-semibold text-btn dark:text-white">
                  Follow Me:
                </p>

                <div className="mt-[20px] flex gap-3">
                  <Link
                    to={"https://www.facebook.com/amitbiswas1994"}
                    target="_blank"
                  >
                    <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                      <FaFacebookF />
                    </button>
                  </Link>
                  <Link to={"https://github.com/amitbd599"} target="_blank">
                    <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                      <FaGithub />
                    </button>
                  </Link>
                  <Link
                    to={"https://www.linkedin.com/in/amitbiswas-tm/"}
                    target="_blank"
                  >
                    <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                      <FaLinkedinIn />
                    </button>
                  </Link>
                  <Link to={"https://medium.com/@amitbd599"} target="_blank">
                    <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                      <FaMedium />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Info Card Section */}
        <section>
          <div className="container mx-auto">
            <div className="grid grid-cols-12 ">
              <div className="col-span-12 lg:col-span-3 ">
                <div className="info-card mt-[60px]">
                  <div className="rounded-[20px] bg-white px-[45px] py-[40px] dark:bg-card">
                    <div className="relative flex justify-center ">
                      <img
                        src="https://avatars.githubusercontent.com/u/89535239?v=4"
                        // src="https://amitjs.com/assets/images/show/ProfileImage.png"
                        alt=""
                        className="w-[200px]"
                      />
                      <img
                        src="/assets/images/show/underline.svg"
                        alt=""
                        className="absolute bottom-[0] "
                      />
                    </div>
                    <div>
                      <div className="mt-[25px]">
                        <div className=" text-center">
                          <h3 className="text-[24px] tracking-[1px] text-btn dark:text-white">
                            Hy! I’m
                            <span className="text-theme"> Bidyut Sikder</span>
                          </h3>
                          <p className="text-btn dark:text-white">
                            Software Developer
                          </p>
                          <p className="mt-[25px] text-[14px] text-btn dark:text-white">
                            bidyutsiker2001@gmail.com
                          </p>
                          <p className="mt-1 text-[14px] text-btn dark:text-white">
                            +88 01733 463493
                          </p>
                          <div className="mt-[30px] flex justify-center gap-3">
                            <Link
                              to={"https://www.facebook.com/amitbiswas1994"}
                              target="_blank"
                            >
                              <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                                <FaFacebookF />
                              </button>
                            </Link>
                            <Link
                              to={"https://github.com/amitbd599"}
                              target="_blank"
                            >
                              <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                                <FaGithub />
                              </button>
                            </Link>
                            <Link
                              to={"https://www.linkedin.com/in/amitbiswas-tm/"}
                              target="_blank"
                            >
                              <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                                <FaLinkedinIn />
                              </button>
                            </Link>
                            <Link
                              to={"https://medium.com/@amitbd599/"}
                              target="_blank"
                            >
                              <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                                <FaMedium />
                              </button>
                            </Link>
                          </div>
                          <div className="mt-[30px]">
                            <Link
                              to="/contact"
                              className="block rounded-full border-2 border-theme bg-theme py-[10px] font-medium  text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme"
                            >
                              Hire Me!
                            </Link>
                          </div>
                          <div className="mt-[20px]">
                            <Link
                              onClick={() => cvToast()}
                              to="/"
                              // target="_blank"
                              // download
                              className="block rounded-full border-2 border-btn bg-btn py-[10px] font-medium text-white transition-all duration-300  dark:hover:bg-transparent"
                            >
                              Download CV
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
                <div className="main__body">
                  {
                    props.children}</div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer Section */}

        <footer>
          <div className="container mx-auto mt-[60px] flex justify-center pb-[40px]">
            <div>
              <p className="text-center text-text">
                Copyright <span className="text-theme">bidyutsikder</span> ©2024. All
                rights reserved
              </p>
              <div className="mt-[20px] flex justify-center text-center">
                <img
                  src={
                    dark === "dark"
                      ? logo
                      : logo
                  }
                  alt=""
                />


                {/* <img
                  src={
                    dark === "dark"
                      ? "https://amitjs.com/assets/images/logo.svg "
                      : "/assets/images/logo-dark.svg"
                  }
                  alt=""
                /> */}


              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MasterLayout;











// const MasterLayout = () => {
//   return (
//     <div>
//       fdsfafas
//     </div>
//   );
// };

// export default MasterLayout;












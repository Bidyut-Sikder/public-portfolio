import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";

const HomeComponent = React.lazy(() => import("../components/HomeComponent"));
const Home = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Home || Web Application Specialist</title>
            <meta
              name="description"
              content="bidyutsikder || Web Application Specialist"
            />
          </Helmet>
          <HomeComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>


  );
};

export default Home;













// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { ReactTyped } from 'react-typed';

// const Home = () => {
//   return (
//     <header>
//           <div className=" container mx-auto pt-[30px] ">
//           <div className=" flex justify-between rounded-[10px] bg-white py-[20px] dark:bg-card ">
//                <div className="logo flex items-center px-[30px]">
                
//                   <Link to={"/"}> 
//                    <img
//                     src={
//                       true
//                         ? "https://avatars.githubusercontent.com/u/89535239?v=4"
//                         : "/assets/images/logo-dark.svg"
//                     }
//                     alt=""
//                   /> 
//                  </Link> 
//                 afasfdsf
//               </div> 

//              <menu className="hidden items-center md:flex">
//                 <ul className="flex  gap-4">
//                   <li>
//                     <NavLink
//                       className={(navData) =>
//                         true
//                           ? "font-semibold text-theme "
//                           : "font-semibold text-text transition-all duration-300 hover:text-btn dark:hover:text-white"
//                       }
//                       to={"/"}
//                     >
//                       Home
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className={(navData) =>
//                         true
//                           ? "font-semibold text-theme"
//                           : "font-semibold text-text transition-all duration-300 hover:text-btn dark:hover:text-white"
//                       }
//                       to={"/about"}
//                     >
//                       About Us
//                     </NavLink>
//                   </li>
//                   <li className="w-[100px]">
//                     <NavLink
//                       className={(navData) =>
//                         true
//                           ? "font-semibold text-theme"
//                           : "font-semibold text-text transition-all duration-300 hover:text-btn dark:hover:text-white"
//                       }
//                       to={"/contact"}
//                     >
//                        <ReactTyped
//                         strings={[" Hire Me!", "Need Help?", "Contact Now"]}
//                         typeSpeed={200}
//                         backSpeed={100}
//                         backDelay={1}
//                         loop
//                         smartBackspace
//                       /> 
//                     </NavLink>
//                   </li>
//                 </ul>
//               </menu> 




//      <div className="flex items-center">
//                 <div className="flex items-center gap-4	 px-[30px]">
//                   <button
//                     className="hidden items-center gap-3 md:flex "
//                     // onClick={darkControl}
//                   >
//                     <p>
//                       <span className="text-btn dark:text-theme ">Dark</span>
//                       <span className="text-btn dark:text-white"> / </span>
//                       <span className="text-theme dark:text-white">Light</span>
//                     </p>
//                     <div>
//                       <img src="/assets/images/icon/sun.svg" alt="" />
//                     </div>
//                   </button>
//                   <button
//                     // onClick={sidebarControl}
//                     className="rounded-full border border-[#919295] p-[10px] text-[25px] "
//                   >
//                     {/* <BiMenuAltRight className="text-text dark:text-text" /> */}
//                   </button>
//                 </div>
//               </div> 


//             </div>
//           </div>
//         </header>
//   );
// };

// export default Home;
















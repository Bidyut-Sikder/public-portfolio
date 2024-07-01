import React from "react";
import { Link } from "react-router-dom";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const HomeComponent = () => {
  const dark = localStorage.getItem("theme");

  return (
    <section className=" mt-[60px] ">
      {/* About Intro */}
      <div className="rounded-xl bg-white p-[30px] dark:bg-card">
        <div>
          <p className="text-[18px] tracking-wide text-text">
            <span className="dark:text-theme">Hi!</span> There I’m
          </p>
          <h2 className="mt-[20px] text-[50px] leading-[60px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Professional <span className="text-theme">Web Application</span>{" "}
            <br /> Specialist
          </h2>
          <p className="mt-[15px] text-text">
            Full Stack Web Developer and Web Application specializing in
            front-end and back-end development. Experienced with all stages of
            the development cycle for dynamic websites. Well versed in numerous
            programming languages JavaScript ES6 Nodejs, structured language
            HTML5 CSS3, open-source front-end JavaScript library ReactJS, NextJS
            With MongoDB & MySql Database.
          </p>
        </div>
      </div>

      {/* About US */}
      <div className="mt-[30px] ">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-12 md:col-span-5">
            <div className="rounded-xl bg-white p-[30px] dark:bg-card">
              <img
                src={
                  dark === "dark"
                    ? "https://amitjs.com/assets/images/logo.svg "
                    : "/assets/images/logo-dark.svg"
                }
                alt=""
              />
              <div className="mt-[20px]">
                <p className="text-[14px] text-text dark:text-white">
                  Want To Know More
                </p>
                <Link to={"/about"}>
                  <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                    About Us
                  </h3>
                </Link>
              </div>
            </div>
            <div>
              <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
                <div className="flex gap-[20px]">
                  <span className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none ">
                    <img src="https://amitjs.com/assets/images/icon/react.png" alt="" />
                  </span>
                  <span className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none">
                    <img src="https://amitjs.com/assets/images/icon/nextjs.png" alt="" />
                  </span>
                  <span className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none ">
                    <img src="https://amitjs.com/assets/images/icon/js.png" alt="" />
                  </span>
                </div>

                <div className="mt-[30px]">
                  <p className="text-[14px] text-text dark:text-white">
                    Specialization
                  </p>
                  <Link to={"/service"}>
                    <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                      Services Offer{" "}
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
              <div className="grid grid-cols-12 pb-1">
                <div className="col-span-6">
                  <h2 className="text-[50px] font-semibold text-btn dark:text-theme">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <>
                            <CountUp delay={0} start={0} end={6} />+
                          </>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-text dark:text-white">
                    Years of <br /> Experience
                  </p>
                </div>
                <div className="col-span-6">
                  <h2 className="text-[50px] font-semibold text-btn dark:text-theme">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <>
                            <CountUp delay={0} start={0} end={635} />+
                          </>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-text dark:text-white">
                    Project <br /> Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="rounded-xl bg-white p-[30px] dark:bg-card">
              <div className="flex justify-center gap-[20px]">
                <div className="overflow-hidden rounded-lg">
                  <div>
                    <img
                      src="https://amitjs.com/assets/images/show/image-1.png"
                      alt=""
                      className="transition-all duration-300 hover:scale-[110%]"
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <div>
                    <img
                      src="https://amitjs.com/assets/images/show/image-2.png"
                      alt=""
                      className="transition-all duration-300 hover:scale-[110%]"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[30px]">
                <p className="text-[14px] text-text dark:text-white">
                  Showcase View
                </p>
                <Link to={"/projects/1"}>
                  <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                    Projects
                  </h3>
                </Link>
              </div>
            </div>
            <div className="mt-[30px] grid grid-cols-12 gap-[30px]">
              <div className="col-span-6 rounded-xl bg-theme px-[30px] py-[25px]">
                <p className="text-[14px] text-btn">Visit Our Blog</p>
                <Link to={"/blog/1"}>
                  <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn">
                    Blog
                  </h3>
                </Link>
              </div>
              <div className="hero-pattern col-span-6 rounded-xl bg-white px-[30px]	py-[25px] dark:bg-card">
                <p className="text-[14px] text-text dark:text-white">
                  Let’s work
                </p>
                <Link to={"/contact"}>
                  <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                    Contact
                  </h3>
                </Link>
              </div>
            </div>
            <div className="mt-[30px] ">
              <div
                className="relative flex h-[205px] items-end rounded-xl bg-cover bg-local bg-center bg-no-repeat  px-[30px] py-[30px]"
                style={{
                  backgroundImage: `url(${"https://amitjs.com/assets/images/show/image-4.png"})`,
                }}
              >
                <div>
                  <p className="text-[14px] text-white">What Client Says?</p>
                  <Link to={"/testimonial"}>
                    <h3 className="mt-[5px] text-[26px] tracking-[6px] text-white">
                      Testimonials
                    </h3>
                  </Link>
                  <img
                    className="absolute right-[30px] top-[50px] z-10"
                    src="/assets/images/icon/shape.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;

import React from "react";
import { FaCaretRight } from "react-icons/fa6";
// import Service from "../script/Service";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const ServiceComponent = () => {
  return (
    <section className="home__component mt-[60px] ">
      {/* Service Intro */}
      <div className="rounded-xl bg-white px-[20px] py-[40px] dark:bg-card lg:p-[40px]">
        <div>
          <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Our Best Service<span className="text-theme">!</span>
          </h1>
          <p className="text-[14px] text-text">
            Are you ready to transform your online presence and create
            unforgettable digital experiences for your users? Our expert web
            design, development, and UX/UI services are crafted to align with
            your unique vision and goals, delivering exceptional results every
            step of the way. Let’s collaborate to build a website that not only
            engages and converts but leaves a lasting impression on your
            audience. Reach out to us today, and together, we’ll bring your
            digital dreams to life.
            {/* If you are ready to elevate your online presence and provide your
            users with a delightful digital journey, look no further. Our web
            design, Web Development, and UX design services are tailored to meet
            your specific needs and deliver outstanding results. Contact us
            today, and let's embark on a collaborative journey to create a
            website that captivates, converts, and makes a lasting impression on
            your audience. */}
          </p>
          <div className="mt-[60px]">
            <div className="grid grid-cols-12 md:gap-[30px]">
              {/* {Service.map((item, index) => (
                <div
                  className="col-span-12 mb-[40px] md:col-span-6 md:mb-0"
                  key={index}
                >
                  <div className="boxShadow rounded-xl bg-white p-[30px] dark:bg-btn dark:shadow-none">
                    <div className="">
                      <img src={item.img} alt="" className="w-[60px]" />
                    </div>
                    <div className="mt-[20px]">
                      <h2 className="text-[24px] text-btn dark:text-white">
                        {item.title}
                      </h2>
                      <ul className="mt-[20px] grid gap-[16px]">
                        {item.elements.map((element, item) => (
                          <li className="flex items-start text-text" key={item}>
                            <FaCaretRight className="mr-[8px] mt-[4px]" />{" "}
                            {element}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>

      {/* Counter section */}
      <div className="mt-[60px] grid grid-cols-12 gap-[5px]">
        <div className="col-span-6 md:col-span-3">
          <div className="flex items-center gap-[20px]">
            <h2 className="text-[50px] text-theme">
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <div className="w-[40px]">
                      <CountUp delay={0} start={0} end={3} />+
                    </div>
                  )
                }
              </TrackVisibility>
            </h2>
            <p className="text-[14px] leading-[24px] text-text">
              Years of <br /> Experience
            </p>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="flex items-center gap-[20px]">
            <h2 className="text-[50px] text-theme">
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <div className="w-[80px]">
                      <CountUp delay={0} start={0} end={35} />+
                    </div>
                  )
                }
              </TrackVisibility>
            </h2>
            <p className="text-[14px] leading-[24px] text-text">
              Projects <br /> Completed
            </p>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="flex items-center gap-[20px]">
            <h2 className="text-[50px] text-theme">
              {" "}
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <div className="w-[60px]">
                      <CountUp delay={0} start={0} end={14} />+
                    </div>
                  )
                }
              </TrackVisibility>
            </h2>
            <p className="text-[14px] leading-[24px] text-text">
              Satisfied <br /> Clients
            </p>
          </div>
        </div>

        <div className="col-span-6 md:col-span-3">
          <div className="flex items-center gap-[20px]">
            <h2 className="text-[50px] text-theme">
              {" "}
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible && (
                    <div className="w-[60px]">
                      <CountUp delay={0} start={0} end={4} />
                      K+
                    </div>
                  )
                }
              </TrackVisibility>
            </h2>
            <p className="text-[14px] leading-[24px] text-text">
              Hour <br /> Work Time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;

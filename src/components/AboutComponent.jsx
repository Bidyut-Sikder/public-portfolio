import React from "react";
import { Progress, Typography } from "@material-tailwind/react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutComponent = () => {
  const dark = localStorage.getItem("theme");
  return (
    <section className="home__component mt-[60px] ">
      {/* About Intro */}

      <div className="rounded-xl bg-white p-[40px] dark:bg-card">
        <div className="grid grid-cols-12 md:gap-[50px]">
          <div className="col-span-12 md:col-span-4">
            <div className="flex justify-center">
              <div className="relative flex justify-center ">
                <img src="https://amitjs.com/assets/images/show/ProfileImage.png" alt="" />
                
              {/* <img src="https://avatars.githubusercontent.com/u/89535239?v=4" alt="" />  */}
                
                <img
                  src="https://amitjs.com/assets/images/show/underline.svg"
                  alt=""
                  className="absolute bottom-[-20px]"
                />

                <img
                  src={
                    dark === "dark"
                      ? "https://amitjs.com/assets/images/icon/AlexJohan.svg"
                      : "/assets/images/icon/AlexJohan-dark.svg"
                  }
                  alt=""
                  className="absolute bottom-[0px]"
                />
              </div>
            </div>
          </div>
        

           <div className="col-span-12 md:col-span-8">
            <div className="mt-[60px] md:mt-0">
              <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
                About Me<span className="text-theme">!</span>
              </h1>
              <p className="text-[14px] text-text">
                My favorite in this programming sector is to fix ‍any Errors.
                Because in every error there is hope to learn something new. I
                won't quit until I can fix the error. In this programming life,
                I have tried to solve all kinds of problems and have succeeded.
                My policy is to stick with it until the problem is solved.
                Contact us today, and let's bring your vision to life with the
                power of Full stack development.
              </p>
              <div className="mt-[25px] gap-[30px] md:flex">
                <div className="flex items-center gap-[20px]">
                  <h2 className="text-[50px] text-theme">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <div className="w-[80px]">
                            <CountUp delay={0} start={0} end={635} />+
                          </div>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-[14px] leading-[24px] text-text">
                    Projects <br /> Completed
                  </p>
                </div>
                <div className="flex items-center gap-[20px]">
                  <h2 className="text-[50px] text-theme">
                    {" "}
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <div className="w-[60px]">
                            <CountUp delay={0} start={0} end={78} />+
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
            </div>
          </div> 



        </div>
      </div>

      {/* EXPERIENCE & EDUCATION */}
      <div className="mt-[30px] grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 md:col-span-6">
          <div className="rounded-xl bg-white p-[30px] dark:bg-card">
            <div>
              <h2 className="text-[24px] text-btn dark:text-white">
                EXPERIENCE
              </h2>
              <div>
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text">2023 - Present</p>
                  <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                    Co Instructor (MERN || Next JS & Prisma)
                  </p>
                  <p className="text-[12px] text-text">Ostad Limited</p>
                </div>
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text">2018 - 2023</p>
                  <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                    Full stack Web Developer (MERN)
                  </p>
                  <p className="text-[12px] text-text">Go-Lang co (USA)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="rounded-xl bg-white p-[30px] dark:bg-card">
            <div>
              <h2 className="text-[24px] text-btn dark:text-white">
                EDUCATION
              </h2>
              <div>
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text">2015 - Present</p>
                  <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                    Research on Software & Web Application
                  </p>
                  <p className="text-[12px] text-text">
                    Learn With Rabbil Hasan || Udemy || Youtube
                  </p>
                </div>
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text">2012 - 2015</p>
                  <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                    Bachelor of Business Studies (BBS)
                  </p>
                  <p className="text-[12px] text-text">
                    National University, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Advantages */}
      <div className="mt-[30px] ">
        <div className="rounded-xl bg-white p-[30px] dark:bg-card">
          <div>
            <h2 className="text-[24px] text-btn dark:text-white">EXPERIENCE</h2>
            <div>
              <div className="mt-[30px]">
                <div>
                  <div className="w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography
                        className="text-[16px] font-medium  text-btn dark:text-white"
                        variant="p"
                      >
                        React JS
                      </Typography>
                      <Typography
                        className="text-btn dark:text-white"
                        variant="h6"
                      >
                        90%
                      </Typography>
                    </div>
                    <Progress
                      value={90}
                      size="lg"
                      className="progress border border-theme/20 bg-theme/10 p-1"
                    />
                  </div>
                  <div className="mt-[20px] w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography
                        className="text-[16px] font-medium text-btn dark:text-white"
                        variant="p"
                      >
                        Next JS
                      </Typography>
                      <Typography
                        className="text-btn dark:text-white"
                        variant="h6"
                      >
                        80%
                      </Typography>
                    </div>
                    <Progress
                      value={80}
                      size="lg"
                      className="progress border border-theme/20 bg-theme/10 p-1"
                    />
                  </div>
                  <div className="mt-[20px] w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography
                        className="text-[16px] font-medium text-btn dark:text-white"
                        variant="p"
                      >
                        JavaScript
                      </Typography>
                      <Typography
                        className="text-btn dark:text-white"
                        variant="h6"
                      >
                        86%
                      </Typography>
                    </div>
                    <Progress
                      value={86}
                      size="lg"
                      className="progress border border-theme/20 bg-theme/10 p-1"
                    />
                  </div>
                  <div className="mt-[20px] w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography
                        className="text-[16px] font-medium text-btn dark:text-white"
                        variant="p"
                      >
                        TypeScript
                      </Typography>
                      <Typography
                        className="text-btn dark:text-white"
                        variant="h6"
                      >
                        60%
                      </Typography>
                    </div>
                    <Progress
                      value={60}
                      size="lg"
                      className="progress border border-theme/20 bg-theme/10 p-1"
                    />
                  </div>
                  <div className="mt-[20px] w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography
                        className="text-[16px] font-medium text-btn dark:text-white"
                        variant="p"
                      >
                        PHP
                      </Typography>
                      <Typography
                        className="text-btn dark:text-white"
                        variant="h6"
                      >
                        65%
                      </Typography>
                    </div>
                    <Progress
                      value={65}
                      size="lg"
                      className="progress border border-theme/20 bg-theme/10 p-1"
                    />
                  </div>
                  <div className="mt-[20px] w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography
                        className="text-[16px] font-medium text-btn dark:text-white"
                        variant="p"
                      >
                        Figma
                      </Typography>
                      <Typography
                        className="text-btn dark:text-white"
                        variant="h6"
                      >
                        85%
                      </Typography>
                    </div>
                    <Progress
                      value={85}
                      size="lg"
                      className="progress border border-theme/20 bg-theme/10 p-1"
                    />
                  </div>
                  <div className="mt-[20px] w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography
                        className="text-[16px] font-medium text-btn dark:text-white"
                        variant="p"
                      >
                        Google Ads Campaign
                      </Typography>
                      <Typography
                        className="text-btn dark:text-white"
                        variant="h6"
                      >
                        75%
                      </Typography>
                    </div>
                    <Progress
                      value={75}
                      size="lg"
                      className="progress border border-theme/20 bg-theme/10 p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;

import React from "react";
import { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleProjectPost__Request__API } from "../Api/Api";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProjectsDetailsComponent = () => {
  const params = useParams();
  const dark = localStorage.getItem("theme");
  const ProjectData = useSelector((state) => state.SingleProjectData.data);

  useEffect(() => {
    singleProjectPost__Request__API(params.id);
  }, [params.id]);
  return (
    <section className=" mt-[60px] ">
      {/* Project details Intro */}
      <div className="rounded-xl bg-white p-[30px] dark:bg-card">
        <div>
          <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Projects Details<span className="text-theme">!</span>
          </h1>
          <p className="text-[14px] text-text">
            Featured and popular products are the best-selling items for your
            product, product range, or company. However, a featured product
            could be a new product line or seasonal products instead.
          </p>
          <div className="mt-[60px]">
            <div className="h-auto w-full overflow-hidden rounded-lg">
              <img
                src={
                  ProjectData?.featureImg
                    ? ProjectData.featureImg
                    : "/assets/images/placeholder.jpg"
                }
                alt=""
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="mt-[40px]">
              {ProjectData?.title ? (
                <>
                  <h2 className="text-[32px] text-btn dark:text-white">
                    {ProjectData?.title}
                  </h2>
                </>
              ) : (
                <>
                  <div>
                    <SkeletonTheme
                      baseColor={dark === "dark" ? "#202020" : "#ddd"}
                      highlightColor={dark === "dark" ? "#444" : "#c9c9c9"}
                    >
                      <p>
                        <Skeleton count={2} />
                      </p>
                    </SkeletonTheme>
                  </div>
                </>
              )}

              <div className="mt-[20px]">
                {ProjectData?.description ? (
                  <div className="rich-text text-text dark:text-gray-400">
                    {ReactHtmlParser(ProjectData?.description)}
                  </div>
                ) : (
                  <>
                    <div>
                      <SkeletonTheme
                        baseColor={dark === "dark" ? "#202020" : "#ddd"}
                        highlightColor={dark === "dark" ? "#444" : "#c9c9c9"}
                      >
                        <p>
                          <Skeleton count={20} />
                        </p>
                      </SkeletonTheme>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project info */}
      <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
        <h2 className="text-[24px] text-btn dark:text-white">Project Info</h2>
        {ProjectData?.client ? (
          <>
            <div className=" mt-[20px] grid gap-[30px] xl:flex xl:gap-[60px]">
              <div>
                <p className="text-[14px] text-text">Client:</p>
                <p className="mt-[6px] text-[18px] font-semibold text-btn dark:text-white">
                  {ProjectData?.client}
                </p>
                {/* <p className="text-[14px] text-text">Turnpike Drive Decatur</p> */}
              </div>
              <div>
                <p className="text-[14px] text-text">Category:</p>
                <p className="mt-[6px] text-[18px] font-semibold text-btn dark:text-white">
                  {ProjectData?.category}
                </p>
              </div>
              <div>
                <p className="text-[14px] text-text">Time frame:</p>
                <p className="mt-[6px] text-[18px] font-semibold text-btn dark:text-white">
                  {ProjectData?.createdDate}
                </p>
              </div>
              <div>
                <p className="text-[14px] text-text">Live Link:</p>
                <div className="mt-[15px]">
                  <Link
                    to={ProjectData?.link}
                    target="_blank"
                    className="boxShadow  rounded-lg bg-white px-[14px] py-[10px] text-[14px] text-white transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme "
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <SkeletonTheme
                baseColor={dark === "dark" ? "#202020" : "#ddd"}
                highlightColor={dark === "dark" ? "#444" : "#c9c9c9"}
              >
                <p>
                  <Skeleton count={5} />
                </p>
              </SkeletonTheme>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsDetailsComponent;

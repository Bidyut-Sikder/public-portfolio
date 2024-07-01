import React from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projectPagination__Request__API } from "../Api/Api";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const ProjectsComponent = () => {
  const dark = localStorage.getItem("theme");
  let navigate = useNavigate();
  const params = useParams();
  const perPage = 4;
  useEffect(() => {
    projectPagination__Request__API(params.pageNo, perPage);
  }, [params.pageNo]);

  // Pagination
  const handelPageClick = (event) => {
    let pageNo = event.selected;

    projectPagination__Request__API(pageNo + 1, perPage).then((res) => {
      if (res === true) {
        navigate(`/projects/${pageNo + 1}`);
      }
    });
  };

  const ProjectData = useSelector((state) => state.ProjectData.pagination);
  const TotalProject = useSelector((state) => state.ProjectData.total);

  return (
    <section className=" mt-[60px] ">
      {/* Project Intro */}
      <div className="rounded-xl bg-white px-[20px] py-[40px] dark:bg-card md:p-[40px]">
        <div>
          <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Featured Projects<span className="text-theme">!</span>
          </h1>
          <p className="text-[14px] text-text">
            Below is a list of some of my recently created jobs with detailed
            information on those jobs. Each project has a live link attached and
            what technology the project has been developed using. Projects are
            usually bound by web design and development information.
          </p>
          <div className="mt-[60px]">
            {ProjectData.length > 0 ? (
              <>
                <div className="grid grid-cols-12 md:gap-[30px]">
                  {ProjectData.map((item, index) => (
                    <div
                      className="col-span-12 mb-[40px] md:col-span-6 md:mb-0"
                      key={index}
                    >
                      <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                        <div className="overflow-hidden rounded-lg drop-shadow-lg">
                          <img
                            src={item?.featureImg}
                            alt=""
                            className="transition-all duration-500 group-hover:scale-[110%]"
                          />
                        </div>
                        <div className="mb-[10px] mt-[20px]">
                          <p className="text-[16px] text-text">
                            {item?.category}
                          </p>
                          <Link to={`/projects-details/${item._id}`}>
                            <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                              {item?.title}
                            </h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-12 md:gap-[30px]">
                  {[...Array(6).keys()].map((item, index) => (
                    <div className="col-span-12 md:col-span-6" key={index}>
                      <SkeletonTheme
                        baseColor={dark === "dark" ? "#202020" : "#ddd"}
                        highlightColor={dark === "dark" ? "#444" : "#c9c9c9"}
                      >
                        <p>
                          <Skeleton count={10} />
                        </p>
                      </SkeletonTheme>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          {/* Pagination */}
          <>
            <div className="pagination mb-8 mt-8 flex justify-center md:mb-0 md:mt-12">
              <div className="pagination__data">
                {TotalProject > perPage && (
                  <ReactPaginate
                    className="flex gap-2"
                    previousLabel="<"
                    nextLabel=">"
                    activeLinkClassName="focus:shadow-outline p-[10px] rounded-full  border-[#17b978] bg-theme text-btn transition-colors duration-150"
                    pageLinkClassName="focus:shadow-outline flex h-10 w-10  items-center justify-center rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme"
                    previousLinkClassName="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme"
                    nextLinkClassName="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme"
                    breakLabel="..."
                    pageCount={TotalProject / perPage}
                    initialPage={params.pageNo - 1}
                    pageRangeDisplayed={6}
                    onPageChange={handelPageClick}
                    type="button"
                  />
                )}
              </div>
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;

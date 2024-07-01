import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogPagination__Request__API } from "../Api/Api";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { useRef } from "react";
import { ErrorTost, IsEmpty } from "../Helpers/FormHelper";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const BlogComponent = () => {
  const dark = localStorage.getItem("theme");
  let navigate = useNavigate();
  const params = useParams();
  const perPage = 6;
  useEffect(() => {
    blogPagination__Request__API(params.pageNo, perPage);
  }, []);

  // Pagination
  const handelPageClick = (event) => {
    let pageNo = event.selected;

    blogPagination__Request__API(pageNo + 1, perPage).then((res) => {
      if (res === true) {
        navigate(`/blog/${pageNo + 1}`);
      }
    });
  };

  let searchRef = useRef();

  const searchLink = () => {
    let searchValue = searchRef.value;

    if (IsEmpty(searchValue)) {
      ErrorTost("Please Input the search field!");
    } else {
      navigate(`/blog/search/${searchValue}/1`);
    }
  };

  const BlogData = useSelector((state) => state.BlogData.data);
  const TotalBlog = useSelector((state) => state.BlogData.total);
  return (
    <section className=" mt-[60px] ">
      {/* Blog Intro */}
      <div className="rounded-xl bg-white px-[20px] py-[40px] dark:bg-card lg:p-[40px]">
        <div>
          <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Our Latest Blog<span className="text-theme">!</span>
          </h1>
          <p className="text-[14px] text-text">
            Providing latest programming related information which will help us
            a lot in our daily software based tasks. You can visit these blocks
            of mine to get updated information related to programming. Some
            important information can be learned from some sites. The blogs are
            provided for learning purpose only.
          </p>
          {/* Search input */}

          <div className="grid grid-cols-12 md:gap-[30px]">
            <div className="col-span-12 md:col-span-6">
              <div className="mt-[30px]">
                <div
                  className="flex max-w-md items-center rounded-lg bg-white drop-shadow-md dark:shadow-none"
                  x-data="{ search: '' }"
                >
                  <div className="w-full">
                    <input
                      type="search"
                      className="w-full rounded-full  px-4 py-1 text-text focus:outline-none"
                      placeholder="search"
                      x-model="search"
                      ref={(input) => (searchRef = input)}
                    />
                  </div>
                  <div>
                    <button
                      onClick={searchLink}
                      type="submit"
                      className="flex h-12 w-14 items-center justify-center rounded-r-lg bg-theme text-white"
                    >
                      <svg
                        className="h-5 w-5 text-btn"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[40px]">
            {BlogData.length > 0 ? (
              <>
                <div className="grid grid-cols-12 md:gap-[30px]">
                  {BlogData.map((item, index) => (
                    <div className="col-span-12 md:col-span-6" key={index}>
                      <div className="group relative mb-[10px]">
                        <div className="h-auto w-full overflow-hidden rounded-xl drop-shadow-lg">
                          <img
                            src={item?.featureImg}
                            alt=""
                            className=" h-full w-full object-cover transition-all duration-500 group-hover:scale-[108%]"
                          />
                        </div>
                        <div className="mt-[20px]">
                          <div className="flex gap-4">
                            <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                              {item?.createdDate}
                            </div>
                            <div className="inline-block rounded-full bg-white px-[15px] py-[3px] text-[11px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                              By Admin
                            </div>
                          </div>
                          <div className="mt-[15px]">
                            <Link to={`/blog-details/${item._id}`}>
                              <h2 className=" text-[28px] font-thin leading-[34px] tracking-wide text-btn transition-all duration-300 dark:text-white  dark:hover:text-theme">
                                {item?.title}
                              </h2>
                            </Link>
                          </div>
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
                {TotalBlog > perPage && (
                  <ReactPaginate
                    className="flex gap-2"
                    previousLabel="<"
                    nextLabel=">"
                    activeLinkClassName="focus:shadow-outline p-[10px] rounded-full  border-[#17b978] bg-theme text-btn transition-colors duration-150"
                    pageLinkClassName="focus:shadow-outline flex h-10 w-10  items-center justify-center rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme"
                    previousLinkClassName="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme"
                    nextLinkClassName="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme"
                    breakLabel="..."
                    pageCount={TotalBlog / perPage}
                    initialPage={params.pageNo - 1}
                    pageRangeDisplayed={3}
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

export default BlogComponent;

import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {
  FaEnvira,
  FaFacebookF,
  FaLinkedinIn,
  FaReddit,
  FaTwitter,
  FaUserLarge,
} from "react-icons/fa6";
import {
  singleBlogPost__Request__API,
  blogPagination__Request__API,
  commentCreate__Request__API,
  readComment_blog_by_id__Request__API,
} from "../Api/Api";
import { useSelector } from "react-redux";
import { SuccessTost } from "../Helpers/FormHelper";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";
const BlogDetailsComponent = () => {
  const dark = localStorage.getItem("theme");
  const params = useParams();
  let nameRef,
    emailRef,
    commentRef = useRef();
  const BlogData = useSelector((state) => state.SingleBlogData.data);
  const AllBlogData = useSelector((state) => state.BlogData.data);
  useEffect(() => {
    singleBlogPost__Request__API(params.id);
    blogPagination__Request__API(1, 1);
    readComment_blog_by_id__Request__API(params.id);
  }, [params.id]);

  const getData = () => {
    let name = nameRef.value;
    let email = emailRef.value;
    let comment = commentRef.value;
    let blogID = BlogData?._id;
    commentCreate__Request__API(name, email, comment, blogID).then((res) => {
      if (res === true) {
        SuccessTost("successfully! Please wait for approve.");
        nameRef.value = "";
        emailRef.value = "";
        commentRef.value = "";
      }
    });
  };
  const commentDataByBlogID = useSelector((state) => state.CommentData.comment);
  // console.log(BlogData.featureImg.length);
  return (
    <section className="mt-[60px] ">
      {/* Blog Intro */}
      <div className="rounded-xl bg-white p-[30px] dark:bg-card">
        {/* Feature Image */}
        <div className="h-auto w-full overflow-hidden rounded-lg">
          <img
            // src={BlogData?.featureImg}
            src={
              BlogData.featureImg
                ? BlogData.featureImg
                : "/assets/images/placeholder.jpg"
            }
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        {/* Details */}
        {BlogData.title ? (
          <>
            <div className="title mt-[40px]">
              <h2 className="text-[26px] leading-[36px] text-btn dark:text-white md:text-[32px] md:leading-[42px]">
                {BlogData?.title}
              </h2>
            </div>
            {/* Tag */}
            <div className="flex gap-4">
              <div className="mt-[16px] inline-block rounded-full bg-white px-[15px] py-[3px] text-[12px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                {BlogData?.createdDate}
              </div>
              <div className="mt-[16px] inline-block rounded-full bg-white px-[15px] py-[3px] text-[12px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                {commentDataByBlogID?.length} Comments
              </div>
            </div>
          </>
        ) : (
          <div className="mt-[40px]">
            <SkeletonTheme
              baseColor={dark === "dark" ? "#202020" : "#ddd"}
              highlightColor={dark === "dark" ? "#444" : "#c9c9c9"}
            >
              <p>
                <Skeleton count={3} />
              </p>
            </SkeletonTheme>
          </div>
        )}

        {BlogData.description ? (
          <>
            {/* Inner richtext */}
            <div className="rich-text mt-[30px] text-text dark:text-gray-400">
              {ReactHtmlParser(BlogData?.description)}
            </div>

            {/* share info */}
            <div className="mt-[30px]">
              <div className="grid items-center justify-between md:flex">
                <div>
                  <p className="text-[18px] font-semibold text-btn dark:text-white">
                    By Amit Biswas
                  </p>
                </div>
                <div className="mt-[20px] md:mt-0">
                  <div className=" flex justify-center gap-3">
                    <FacebookShareButton
                      url={`https://amitjs.com/blog-details/${params.id}`}
                    >
                      <span className="boxShadow block rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                        <FaFacebookF />
                      </span>
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={`https://amitjs.com/blog-details/${params.id}`}
                    >
                      <span className="boxShadow block rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                        <FaTwitter />
                      </span>
                    </TwitterShareButton>
                    <LinkedinShareButton
                      url={`https://amitjs.com/single-blog/${params.id}`}
                    >
                      <span className="boxShadow block rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                        <FaLinkedinIn />
                      </span>
                    </LinkedinShareButton>
                    <RedditShareButton
                      url={`https://amitjs.com/single-blog/${params.id}`}
                    >
                      <span className="boxShadow block rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                        <FaReddit />
                      </span>
                    </RedditShareButton>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] border-t border-[#ddd] dark:border-btn"></div>
              <div className="mt-[30px] hidden md:block">
                <div className="flex items-center justify-between">
                  <div>
                    <Link
                      to={`/blog-details/${AllBlogData[0]?._id}`}
                      className="group flex items-center gap-[20px]"
                    >
                      <div>
                        <span className="inline-block rounded-full bg-btn p-[14px] text-text transition-all duration-300 group-hover:bg-theme group-hover:text-btn">
                          <FaEnvira />
                        </span>
                      </div>
                      <div>
                        <p className="text-text">Latest Blog</p>

                        <h3 className="text-[24px] text-btn transition-all duration-300 dark:text-white dark:group-hover:text-theme">
                          {AllBlogData[0]?.title}
                        </h3>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-[30px]">
              <SkeletonTheme
                baseColor={dark === "dark" ? "#202020" : "#ddd"}
                highlightColor={dark === "dark" ? "#444" : "#c9c9c9"}
              >
                <p>
                  <Skeleton count={30} />
                </p>
              </SkeletonTheme>
            </div>
          </>
        )}

        {/* Comment section */}
        <div className="mt-[60px]">
          <div>
            <h2 className="text-[24px] text-btn dark:text-white">
              {commentDataByBlogID?.length} Comments
            </h2>
          </div>
          <div className="my-[15px] border-t border-[#ddd] dark:border-btn"></div>
          {/* User Comment */}
          <div className="parent mt-[40px]">
            {commentDataByBlogID.map((item, index) => (
              <div key={index}>
                <div className="flex w-full items-start gap-[20px]">
                  <div>
                    <FaUserLarge className="rounded-full border border-theme p-[10px] text-[50px] text-btn dark:text-white" />
                  </div>
                  <div className="w-full ">
                    <div className="flex justify-between">
                      <div className="">
                        {item.name ? (
                          <>
                            <p className="text-[18px] font-semibold   leading-[24px] text-btn dark:text-white">
                              {item.name.slice(0, 25)}
                            </p>
                          </>
                        ) : (
                          <>
                            <div>
                              <SkeletonTheme
                                baseColor={dark === "dark" ? "#202020" : "#ddd"}
                                highlightColor={
                                  dark === "dark" ? "#444" : "#c9c9c9"
                                }
                              >
                                <p>
                                  <Skeleton count={2} />
                                </p>
                              </SkeletonTheme>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="">
                        <span className=" inline-block rounded-full bg-white px-[15px] py-[3px] text-[12px] text-text drop-shadow-md dark:bg-btn dark:text-theme">
                          {item?.createdDate}
                        </span>
                      </div>
                    </div>
                    {item.comment ? (
                      <>
                        <div className="mt-[10px]">
                          <p className="text-text">{item.comment}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="mt-[10px]">
                          <SkeletonTheme
                            baseColor={dark === "dark" ? "#202020" : "#ddd"}
                            highlightColor={
                              dark === "dark" ? "#444" : "#c9c9c9"
                            }
                          >
                            <p>
                              <Skeleton count={2} />
                            </p>
                          </SkeletonTheme>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="my-[30px] ml-[30px] border-t border-[#ddd] dark:border-btn md:ml-[80px]"></div>
              </div>
            ))}
          </div>

          {/* Leave a comment section */}
          <div className="mt-[40px]">
            <div>
              <h2 className="text-[24px] text-btn dark:text-white">
                Post a Comment
              </h2>
              <p className="mt-[2px] text-text">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="mt-[30px]">
                <div className="grid w-full gap-[20px] md:flex">
                  <div className="md:w-1/2">
                    <input
                      className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white "
                      type="text"
                      placeholder="Full Name:"
                      ref={(input) => (nameRef = input)}
                    />
                  </div>
                  <div className="md:w-1/2">
                    <input
                      className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none  dark:border-none dark:bg-btn dark:text-white "
                      type="email"
                      placeholder="Your Email:"
                      ref={(input) => (emailRef = input)}
                    />
                  </div>
                </div>
                <div className="mt-[20px]">
                  <textarea
                    placeholder="Write your Comment here:"
                    name=""
                    id=""
                    cols="30"
                    rows="6"
                    ref={(input) => (commentRef = input)}
                    className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white "
                  ></textarea>
                </div>
                <div>
                  <div className="mb-6 mt-[20px] flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className=" h-4 w-4 rounded  bg-btn "
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="font-medium text-text"
                      >
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-[30px]">
                  <button
                    onClick={getData}
                    className=" rounded-full border-2 border-theme bg-theme px-[30px] py-[10px] font-medium   text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsComponent;

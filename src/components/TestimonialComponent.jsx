import React from "react";
import { FaStar } from "react-icons/fa6";

const TestimonialComponent = () => {
  return (
    <section className="mt-[60px] ">
      {/* Testimonial Intro */}
      <div className="rounded-xl bg-white p-[30px] dark:bg-card">
        <div>
          <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Testimonial<span className="text-theme">!</span>
          </h1>
          <p className="text-[14px] text-text">
            {/* Customers have submitted their feedback to me based on the work I
            have done so far. Words of goodwill given by those where mentioned.
            They were happy with the work I provided and expressed their
            thoughts which I have attached below. I am very pleased to work with
            them. */}
            Clients have shared their valuable feedback regarding the work I’ve
            delivered. Their kind words and positive remarks reflect their
            satisfaction and appreciation. I’ve attached their testimonials
            below, which highlight their happiness with the results. It’s been a
            pleasure collaborating with them, and I’m truly grateful for the
            opportunity to contribute to their projects.
          </p>
          <div className="mb-[30px] mt-[60px]">
            <div className="grid grid-cols-12 md:gap-[30px]">
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow rounded-xl bg-white p-[30px] dark:bg-btn dark:shadow-none">
                  <div className="flex items-center gap-[20px]">
                    <div className="flex items-center gap-[20px]">
                      <div className="w-[60px] overflow-hidden rounded-full">
                        <img
                          src="https://amitjs.com/assets/images/user/user-6.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-[20px] text-btn dark:text-white">
                          Gloria Hernandez
                        </h2>
                        <div className="mt-[5px] flex gap-1">
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                        </div>
                      </div>
                    </div>
                    <div className=" hidden pl-[30px] xl:block">
                      <img
                        src="https://amitjs.com/assets/images/icon/testimonial.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mb-[20px] mt-[30px] border-t border-[#ddd] dark:border-text"></div>
                  <div>
                    <p className="text-text">
                      Bidyut consistently delivers high-quality web design and
                      is always proactive in offering guidance for SEO
                      optimization. He also excels in integrating social media
                      tools like Facebook and Google Ads.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow rounded-xl bg-white p-[30px] dark:bg-btn dark:shadow-none">
                  <div className="flex items-center gap-[20px]">
                    <div className="flex items-center gap-[20px]">
                      <div className="w-[60px] overflow-hidden rounded-full">
                        <img
                          src="https://amitjs.com/assets/images/user/user-6.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-[20px] text-btn dark:text-white">
                          Andy Kowalski
                        </h2>
                        <div className="mt-[5px] flex gap-1">
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                        </div>
                      </div>
                    </div>
                    <div className=" hidden pl-[30px] xl:block">
                      <img
                        src="https://amitjs.com/assets/images/icon/testimonial.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mb-[20px] mt-[30px] border-t border-[#ddd] dark:border-text"></div>
                  <div>
                    <p className="text-text">
                      "He is fantastic at crafting visually appealing websites
                      and provides exceptional support in configuring Google
                      Analytics and Ads to ensure optimal performance."
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow rounded-xl bg-white p-[30px] dark:bg-btn dark:shadow-none">
                  <div className="flex items-center gap-[20px]">
                    <div className="flex items-center gap-[20px]">
                      <div className="w-[60px] overflow-hidden rounded-full">
                        <img
                          src="https://amitjs.com/assets/images/user/user-6.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-[20px] text-btn dark:text-white">
                          Andy Kowalski
                        </h2>
                        <div className="mt-[5px] flex gap-1">
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                        </div>
                      </div>
                    </div>
                    <div className=" hidden pl-[30px] xl:block">
                      <img
                        src="https://amitjs.com/assets/images/icon/testimonial.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mb-[20px] mt-[30px] border-t border-[#ddd] dark:border-text"></div>
                  <div>
                    <p className="text-text">
                      "His expertise in web design is matched by his dedication
                      to helping implement effective marketing strategies
                      through Google Ads and Facebook integration."
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow rounded-xl bg-white p-[30px] dark:bg-btn dark:shadow-none">
                  <div className="flex items-center gap-[20px]">
                    <div className="flex items-center gap-[20px]">
                      <div className="w-[60px] overflow-hidden rounded-full">
                        <img
                          src="https://amitjs.com/assets/images/user/user-6.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-[20px] text-btn dark:text-white">
                          Andy Kowalski
                        </h2>
                        <div className="mt-[5px] flex gap-1">
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                          <FaStar className="text-[14px] text-[#F6C800]" />
                        </div>
                      </div>
                    </div>
                    <div className=" hidden pl-[30px] xl:block">
                      <img
                        src="https://amitjs.com/assets/images/icon/testimonial.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mb-[20px] mt-[30px] border-t border-[#ddd] dark:border-text"></div>
                  <div>
                    <p className="text-text">
                      "Bidyut provides top-notch web design services while also
                      offering valuable assistance in configuring and optimizing
                      both Facebook and Google Ads for business growth."
                    </p>
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

export default TestimonialComponent;

import React from "react";
import { useRef } from "react";
// import { messageCreate__Request__API } from "../Api/Api";
import { SuccessTost } from "../Helpers/FormHelper";

const ContactComponent = () => {
  let fullNameRef,
    emailRef,
    websiteRef,
    messageRef = useRef();

  // Create Message
  const getData = () => {
    let fullName = fullNameRef.value;
    let email = emailRef.value;
    let website = websiteRef.value;
    let message = messageRef.value;
    messageCreate__Request__API(fullName, email, website, message).then(
      (res) => {
        if (res === true) {
          fullNameRef.value = "";
          emailRef.value = "";
          websiteRef.value = "";
          messageRef.value = "";
          SuccessTost("Message send successful!");
        }
      }
    );
  };

  return (
    <section className=" mt-[60px] ">
      {/* contact Intro */}
    <div className="rounded-xl bg-white p-[30px] dark:bg-card">
        <div>
          <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Let’s Chat<span className="text-theme">!</span>
          </h1>
          <p className="text-[14px] text-text">
            Feel free to contact us through Twitter or Facebook if you prefer!
          </p>
          <div className="mb-[30px] mt-[30px]">
            <div>
              <div>
                <div>
                  <div className="grid w-full gap-[20px] md:flex">
                    <div className="md:w-1/2">
                      <input
                        className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
                        type="text"
                        placeholder="Full Name:"
                        ref={(input) => (fullNameRef = input)}
                      />
                    </div>
                    <div className="md:w-1/2">
                      <input
                        className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white "
                        type="email"
                        placeholder="Your Email:"
                        ref={(input) => (emailRef = input)}
                      />
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <input
                      className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white "
                      type="text"
                      placeholder="Website Link:"
                      ref={(input) => (websiteRef = input)}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <textarea
                      placeholder="Write your Massage here:"
                      name=""
                      id=""
                      cols="30"
                      rows="6"
                      ref={(input) => (messageRef = input)}
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
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-[30px]">
                    <button
                      onClick={getData}
                      className=" rounded-full border-2 border-theme bg-theme px-[30px] py-[10px] font-medium   text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme"
                    >
                      Send Massage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* Map section */}

      <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29487.110529660204!2d91.78233825630927!3d22.50835433721081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd66e0fc1fe75%3A0x1a5fa83776c97924!2sHathazari!5e0!3m2!1sen!2sbd!4v1689738975067!5m2!1sen!2sbd"
            height={470}
            width={"100%"}
          />
        </div>
      </div> 
      {/* contact info */}


     <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
        <h2 className="text-[24px] text-btn dark:text-white">
          Request a quote for work
        </h2>
        <div className="mt-[20px] grid gap-[30px] xl:flex xl:gap-[60px]">
          <div>
            <p className="text-[14px] text-text">Call for help</p>
            <p className="mt-[6px] text-[16px] font-medium text-btn dark:text-white">
              +88 01814 331350
            </p>
            <p className="mt-[2px] text-[16px] font-medium text-btn dark:text-white">
              +88 01614 331350
            </p>
          </div>
          <div>
            <p className="text-[14px] text-text">Home Address</p>
            <p className="mt-[6px] text-[16px] font-medium text-btn dark:text-white">
              Hathazari (4330), Chattogram, <br /> Bangladesh.
            </p>
          </div>
          <div>
            <p className="text-[14px] text-text">Email address</p>
            <p className="mt-[6px] text-[16px] font-medium text-btn dark:text-white">
              amitbd599@gmail.com
            </p>
            <p className="mt-[2px] text-[16px] font-medium">info@company.com</p>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default ContactComponent;

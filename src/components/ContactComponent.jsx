import React, { useState } from "react";
import { useRef } from "react";
// import { messageCreate__Request__API } from "../Api/Api";
import { SuccessTost } from "../Helpers/FormHelper";
import emailjs from "@emailjs/browser";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";
import { isValidEmail, isValidWebsite } from "../Helpers/utils";

const ContactComponent = () => {
  const [loader, setLoader] = useState(false);

  let fullNameRef,
    emailRef,
    websiteRef,
    messageRef = useRef();

  // Create Message
  const getData = async () => {
    let fullName = fullNameRef.value;
    let email = emailRef.value;
    let website = websiteRef.value;
    let message = messageRef.value;
    
    //i used github environment and secrets to store emailjs service id, public key and template id
    const YOUR_SERVICE_ID = process.env.YOUR_SERVICE_ID; // "service_8yly24d";
    const YOUR_TEMPLATE_ID = process.env.YOUR_TEMPLATE_ID; // "template_kepf33p";
    const YOUR_PUBLIC_KEY = process.env.YOUR_PUBLIC_KEY; // "lE7lQ9QlyJ5B4qION";
    if (!isValidEmail(email)) {
      toast.error("Invalid Email Address");
      return;
    }

    if (!isValidWebsite(website)) {
      toast.error("Invalid Website Address");
      return;
    }
    const formData = {
      from_name: fullName,
      from_email: email,
      to_name: "Bidyut Sikder",
      website: website,
      message: message,
    };
    setLoader(true);
    const res = await emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        (res) => {
          setLoader(false);
          console.log("SUCCESS!", res);
          toast.success("Your Message has been sent successfully");

          fullNameRef.value = "";
          emailRef.value = "";
          websiteRef.value = "";
          messageRef.value = "";
        },
        (error) => {
          setLoader(false);
          console.log("FAILED...", error.text);
          toast.error("Failed to send your message. Please try again later");
        }
      );

    // messageCreate__Request__API(fullName, email, website, message).then(
    //   (res) => {
    //     if (res === true) {
    //       fullNameRef.value = "";
    //       emailRef.value = "";
    //       websiteRef.value = "";
    //       messageRef.value = "";
    //       SuccessTost("Message send successful!");
    //     }
    //   }
    // );
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
                      disabled={loader && true}
                      onClick={getData}
                      className=" rounded-full border-2 border-theme bg-theme px-[30px] py-[10px] font-medium   text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme"
                    >
                      {loader ? "Loading.." : "Send Massage"}
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
            width={"100%"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58762.28736611795!2d89.77806332577585!3d23.00015318141063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffc29c3b07af57%3A0x1b95b14d7eebbcd1!2sGopalganj!5e0!3m2!1sen!2sbd!4v1732084515576!5m2!1sen!2sbd"
            height={470}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
              +88 01733 463493
            </p>
          </div>
          <div>
            <p className="text-[14px] text-text">Home Address</p>
            <p className="mt-[6px] text-[16px] font-medium text-btn dark:text-white">
              Tungipara, Gopalgonj, <br /> Bangladesh.
            </p>
          </div>
          <div>
            <p className="text-[14px] text-text">Email address</p>
            <p className="mt-[6px] text-[16px] font-medium text-btn dark:text-white">
              bidyutsikder2001@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;

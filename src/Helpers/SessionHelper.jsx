import toast from "react-hot-toast";

  //import CryptoJS from ("crypto-js");


class SessionHelper {
  setToken(token) {
    localStorage.setItem("Token", token);
  }
  getToken() {
    return localStorage.getItem("Token");
  }
  setEmail(email) {
    localStorage.setItem("Email", email);
  }
  getEmail() {
    return localStorage.getItem("Email");
  }
  setPassword(password) {
    localStorage.setItem("accessCode", password);
  }
  // getPassword() {
  //   let encryptPassword = localStorage.getItem("accessCode");
  //   // Decrypt
  //   var bytes = CryptoJS.AES.decrypt(encryptPassword, "key@658");
  //   var dncryptPassword = bytes.toString(CryptoJS.enc.Utf8);
  //   return dncryptPassword;
  // }
  setUserDetails(userDetails) {
    localStorage.setItem("UserDetails", JSON.stringify(userDetails));
  }
  getUserDetails() {
    return JSON.parse(localStorage.getItem("UserDetails"));
  }
  removeSession() {
    localStorage.clear();
    window.location.href = "/login";
  }

  preToast() {
    const switchDark = () => {
      localStorage.setItem("switchDark", JSON.stringify("yes"));
      localStorage.setItem("theme", "dark");
      window.location.reload();
      toast.remove();
    };
    toast.custom((t) => (
      <div className="preTost fixed left-0 top-0 h-screen w-full bg-btn/70">
        <div className="flex h-full w-full items-center justify-center">
          <div
            className={`${t.visible ? "animate-enter" : "animate-leave"
              }  pointer-events-auto mx-4 flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
          >
            <div className=" w-0 flex-1 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-auto w-10 rounded-full"
                    src="https://amitjs.com/assets/images/show/ProfileImage.png"
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-[16px] font-semibold text-btn">
                    Hi, This is Bidyut
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    For the best view performance, we switch to the dark
                    version!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={switchDark}
                className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-btn hover:text-btn focus:outline-none  "
              >
                Switch
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  cvToast() {
    const switchDark = () => {
      toast.remove();
    };
    toast.custom((t) => (
      <div className="preTost fixed left-0 top-0 h-screen w-full bg-btn/70">
        <div className="flex h-full w-full items-center justify-center">
          <div
            className={`${t.visible ? "animate-enter" : "animate-leave"
              }  pointer-events-auto mx-4 flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
          >
            <div className=" w-0 flex-1 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-auto w-10 rounded-full"
                    src="https://amitjs.com/assets/images/show/ProfileImage.png"
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-[16px] font-semibold text-btn">
                    Hi, This is Bidyut
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Please Contact With Me! <br /> If you want to download my CV
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={switchDark}
                className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-btn hover:text-btn focus:outline-none  "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  }
}

export const {
  setToken,
  getToken,
  setEmail,
  getEmail,
  setPassword,
  getPassword,
  removeSession,
  setUserDetails,
  getUserDetails,
  preToast,
  cvToast,
} = new SessionHelper();

import axios from "axios";
import { ErrorTost, SuccessTost } from "../Helpers/FormHelper";
import {
  getToken,
  setEmail,
  setPassword,
  setToken,
} from "../Helpers/SessionHelper";
import { hideLoader, showLoader } from "../Redux/stateSlice/LoaderSettingSlice";
import store from "../Redux/Store/Store";
import { paginationBlog, totalBlog } from "../Redux/stateSlice/BlogDataSlicer";
import { loadSingleData } from "../Redux/stateSlice/SingleBlogDataSlicer";
import {
  paginationProjectData,
  totalProjectData,
} from "../Redux/stateSlice/ProjectDataSlice";
import { loadSingleProjectData } from "../Redux/stateSlice/SingleProjectDataSlicer";
import {
  commentByBlogID,
  paginationAllComment,
  totalComment,
} from "../Redux/stateSlice/CommentDataSlicer";
import {
  loadSingleMessageData,
  paginationMessageData,
  totalMessageData,
} from "../Redux/stateSlice/MessageDataSlice";

// let CryptoJS = require("crypto-js");

// const BaseURL = "http://localhost:5000/api/v1";
const BaseURL = "https://amitjs.cyclic.app/api/v1";

const TokenData = { headers: { Token: getToken() } };

// ********************* Auth Api  *********************
//! ==================  Login API ===================
export const login__Request__API = async (email, password) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/login-admin";
  let postBody = {
    email,
    password,
  };

  // Encrypt
  // var encryptPassword = CryptoJS.AES.encrypt(password, "key@658").toString();

  try {
    const result = await axios.post(URL, postBody);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      if (result.data["status"] === "success") {
        setToken(result.data["token"]);
        setEmail(email);
        setPassword(encryptPassword);
        SuccessTost("Login Success!");
        return true;
      } else {
        ErrorTost("Login Fail!-1");
        return false;
      }
    } else {
      ErrorTost("Login Fail!-2");
      return false;
    }
  } catch (e) {
    ErrorTost("Login Fail!-3");
    return false;
  }
};

//! ================== Verify Email ==================

export const verifyEmail = async (email, password) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/verify-user";

  let postBody = {
    email: email,
    password: password,
  };
  // debugger;
  try {
    const result = await axios.post(URL, postBody);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      if (result.data["status"] === "unauthorized") {
        ErrorTost("Unauthorized! Please Login Again.");
        return true;
      } else {
        return false;
      }
    } else {
      ErrorTost("Something is wrong!");
      return false;
    }
  } catch (e) {
    ErrorTost("Something is wrong!");
    return false;
  }
};

// ********************* Blog  *********************
//! ================== 1 Create Blog Post API ====================
export const createBlogPost__Request__API = async (
  title,
  description,
  featureImg
) => {
  let URL = BaseURL + "/create-blog";
  store.dispatch(showLoader());
  let postBody = {
    title,
    featureImg,
    description,
  };
  try {
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      SuccessTost("Create Task Success");
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ================== 2 Get All Blog Post by Pagination API ===================
export const blogPagination__Request__API = async (pageNo, perPage) => {
  store.dispatch(paginationBlog([]));
  store.dispatch(showLoader());
  let URL = BaseURL + "/get-all-blog/" + pageNo + "/" + perPage;

  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(paginationBlog(result.data["data"][0]["Row"]));
      store.dispatch(totalBlog(result.data["data"][0]["Total"][0]?.count));
      return true;
    } else {
      ErrorTost("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong-2");
    return false;
  }
};

//! ==================== 3 Delete Blog API ======================

export const deleteBlogPost__Request__API = async (id) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/delete-blog/" + id;

  try {
    const result = await axios.delete(URL, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ================== 4 Update Blog Post API  =======================
export const updateBlogPost__Request__API = async (
  title,
  description,
  featureImg,
  id
) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/update-blog/" + id;
  let postBody = {
    title,
    featureImg,
    description,
  };

  try {
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      SuccessTost("Update Task Success");
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! =================== 5 Single Blog Post API =======================

export const singleBlogPost__Request__API = async (id) => {
  store.dispatch(loadSingleData([]));
  store.dispatch(showLoader());
  let URL = BaseURL + "/single-blog/" + id;
  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(loadSingleData(result.data["data"][0]));
      return true;
    } else {
      ErrorTost("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong-2");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ================== Get All Search Blog Post by Pagination API ===================
export const blogSearchPagination__Request__API = async (
  search,
  pageNo,
  perPage
) => {
  store.dispatch(showLoader());
  let URL =
    BaseURL + "/get-all-blog/search/" + search + "/" + pageNo + "/" + perPage;

  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      console.log(result.status);
      store.dispatch(paginationBlog(result.data["data"][0]["Row"]));
      if (result.data["data"][0]["Total"].length > 0) {
        store.dispatch(totalBlog(result.data["data"][0]["Total"][0]["count"]));
      }

      return true;
    } else {
      ErrorTost("Something Went Wrong -1");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong -2");
    console.log(e);
    return false;
  }
};

// ********************* Project  *********************
//! ==================== 1 Project create Post API ===================

export const projectCreate__Request__API = async (
  title,
  description,
  featureImg,
  client,
  category,
  link,
  createdDate
) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/create-project";
  let postBody = {
    title,
    description,
    featureImg,
    client,
    category,
    link,
    createdDate,
  };
  debugger;
  try {
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong-2");
    return false;
  }
};

//! ================ 2 Get All Project by Pagination API ================
export const projectPagination__Request__API = async (pageNo, perPage) => {
  store.dispatch(paginationProjectData([]));
  store.dispatch(showLoader());
  let URL = BaseURL + "/get-all-project/" + pageNo + "/" + perPage;

  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(paginationProjectData(result.data["data"][0]["Row"]));
      store.dispatch(
        totalProjectData(result?.data["data"][0]["Total"][0]["count"])
      );

      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong");
    return false;
  }
};

//!====================== 3 Delete Project Post API =====================

export const deleteProject__Request__API = async (id) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/delete-project/" + id;

  try {
    const result = await axios.delete(URL, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ==================== 4 Update Project Post API ====================
export const updateProjectPost__Request__API = async (
  title,
  description,
  featureImg,
  client,
  category,
  link,
  createdDate,
  id
) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/update-project/" + id;
  let postBody = {
    title,
    description,
    featureImg,
    client,
    category,
    link,
    createdDate,
    id,
  };

  try {
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      SuccessTost("Update Task Success");
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ===================== 5 Single Project Post API ====================

export const singleProjectPost__Request__API = async (id) => {
  store.dispatch(loadSingleProjectData([]));
  store.dispatch(showLoader());
  let URL = BaseURL + "/single-project/" + id;
  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(loadSingleProjectData(result.data["data"][0]));
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

// *********************  Comment  *********************

//! ==================== 1 Comment create Post API ===================

export const commentCreate__Request__API = async (
  name,
  email,
  comment,
  blogID
) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/create-comment";
  let postBody = {
    name,
    email,
    comment,
    blogID,
  };

  try {
    const result = await axios.post(URL, postBody);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong-2");
    return false;
  }
};

//! ================ 2 Get All Comment by Pagination API ================
export const commentPagination__Request__API = async (pageNo, perPage) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/get-all-comment/" + pageNo + "/" + perPage;

  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(paginationAllComment(result.data["data"][0]["Row"]));
      store.dispatch(totalComment(result.data["data"][0]["Total"][0]["count"]));

      return true;
    } else {
      ErrorTost("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong-2");
    return false;
  }
};

//!====================== 3 Delete Comment Post API =====================

export const deleteComment__Request__API = async (id) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/delete-comment/" + id;

  try {
    const result = await axios.delete(URL, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ==================== 4 Update Comment Post API ====================
export const updateCommentPost__Request__API = async (isApprove, id) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/update-comment/" + id;
  let postBody = {
    isApprove: isApprove,
  };

  try {
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      SuccessTost("Update Task Success");
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ===================== Read Comment By Blog ID Post API ====================

export const readComment_blog_by_id__Request__API = async (BlogID) => {
  store.dispatch(commentByBlogID([]));
  store.dispatch(showLoader());
  let URL = BaseURL + "/read-comment_blog_id/" + BlogID;
  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(commentByBlogID(result.data["data"]));
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

// *********************  Message  *********************

//! ==================== 1 Message create Post API ===================

export const messageCreate__Request__API = async (
  fullName,
  email,
  message,
  website
) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/create-message";
  let postBody = {
    fullName,
    email,
    message,
    website,
  };

  try {
    const result = await axios.post(URL, postBody);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong-1");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong-2");
    return false;
  }
};

//! ================ 2 Get All Message by Pagination API ================
export const messagePagination__Request__API = async (pageNo, perPage) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/get-all-message/" + pageNo + "/" + perPage;

  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(paginationMessageData(result.data["data"][0]["Row"]));
      store.dispatch(
        totalMessageData(result.data["data"][0]["Total"][0]["count"])
      );

      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    store.dispatch(hideLoader());
    ErrorTost("Something Went Wrong");
    return false;
  }
};

//!====================== 3 Delete Message Post API =====================

export const deleteMessage__Request__API = async (id) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/delete-message/" + id;

  try {
    const result = await axios.delete(URL, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ==================== 4 Update Message Post API ====================
export const updateMessagePost__Request__API = async (id) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/update-message/" + id;
  let postBody = {
    show: true,
    id,
  };

  try {
    const result = await axios.post(URL, postBody, TokenData);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

//! ===================== 5 Single Message Post API ====================

export const singleCommentPost__Request__API = async (id) => {
  store.dispatch(showLoader());
  let URL = BaseURL + "/single-project/" + id;
  try {
    const result = await axios.get(URL);
    store.dispatch(hideLoader());
    if (result.status === 200) {
      store.dispatch(loadSingleMessageData(result.data["data"][0]));
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");
    store.dispatch(hideLoader());
    return false;
  }
};

import React from "react";
import ReactDOM from "react-dom/client";
import "react-quill/dist/quill.snow.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

import App from "./App";
 //import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
  <ThemeProvider>
    <Toaster
      containerClassName="toaster-container"
      toastOptions={{
        duration: 500000,
      }}
    />
   <App />
   </ThemeProvider>
</React.Fragment> 


);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 //reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import ResumeHeader from "./Resume_Header";
import ResumePersonInfo from "./Resume_Person_Info";
import Education from "./Educational";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ResumeHeader />
    <ResumePersonInfo />
    <Education />
  </>
);

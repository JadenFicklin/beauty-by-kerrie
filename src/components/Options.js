import React from "react";
import "../styles/Options.css";
import Insta from "./Insta";

function Options() {
  return (
    <>
      <div className="options-outer">
        <div className="options-top">
          <div className="boxes-top">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="boxes-bottom">
            <div className="box-wide"></div>
            <div className="box bot"></div>
            <div className="box bot"></div>
          </div>
        </div>
        <div className="options-bottom">
          <Insta />
        </div>
      </div>
    </>
  );
}

export default Options;

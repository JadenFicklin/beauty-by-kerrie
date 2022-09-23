import React from "react";
import "../styles/Landing.css";
import "../App.css";

function Landing() {
  return (
    <>
      <div className="landing-outer">
        <div className="landing-text-one header spacing">Beauty by</div>
        <div className="landing-text-two header spacing">Beauty by</div>
        <div className="landing-text-three header spacing">Beauty by</div>
        {/* <div className="landing-text-four header">Kerrie</div> */}
        <div className="landing-signiture"></div>
        <div className="landing-picture"></div>
      </div>
    </>
  );
}

export default Landing;

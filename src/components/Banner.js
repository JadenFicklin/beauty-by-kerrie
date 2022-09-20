import React from "react";
import "../styles/Banner.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

function Banner() {
  return (
    <>
      <div className="banner-outer">
        <div className="banner-text-one">I SPECIALIZE IN</div>
        <div className="banner-text-two">
          <em>BEAUTIFUL</em>
        </div>
        <div className="banner-text-three">
          COSMETIC TATTOOING IN CHARLOTTE, NC
        </div>
        <div className="banner-icons">
          <div className="icon">
            <BsFacebook className="icon-import" />
          </div>
          <div className="icon">
            <BsTwitter className="icon-import" />
          </div>
          <div className="icon">
            <RiInstagramFill className="icon-import" />
          </div>
          <div className="icon">
            <BsLinkedin className="icon-import" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

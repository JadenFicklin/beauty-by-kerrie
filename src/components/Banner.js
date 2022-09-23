import React from "react";
import "../styles/Banner.css";
import { BsFacebook } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

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
          <a
            className="icon"
            href="https://www.facebook.com/kerrie.havranek"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="icon-import" />
          </a>
          <a
            className="icon"
            href="https://linktr.ee/beautybykerrie"
            target="_blank"
            rel="noreferrer"
          >
            <BiLink className="icon-import" />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/kerrieficklincosmetictattoo/"
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramFill className="icon-import" />
          </a>
          <a
            className="icon"
            href="https://www.youtube.com/channel/UCD6-b5rOdZSAoX1cx9hg49g"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="icon-import" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Banner;

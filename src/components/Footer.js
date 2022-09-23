import React from "react";
import "../styles/Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer-outer">
        <div className="footer-icons">
          <a
            className="footer-icon"
            href="https://www.facebook.com/kerrie.havranek"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="footer-icon-import" />
          </a>
          <a
            className="footer-icon"
            href="https://linktr.ee/beautybykerrie"
            target="_blank"
            rel="noreferrer"
          >
            <BiLink className="footer-icon-import" />
          </a>
          <a
            className="footer-icon"
            href="https://www.instagram.com/kerrieficklincosmetictattoo/"
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramFill className="footer-icon-import" />
          </a>
          <a
            className="footer-icon"
            href="https://www.youtube.com/channel/UCD6-b5rOdZSAoX1cx9hg49g"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="footer-icon-import" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;

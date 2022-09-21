import React from "react";
import "../styles/Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="footer-outer">
        <div className="footer-icons">
          <div className="footer-icon">
            <BsFacebook className="footer-icon-import" />
          </div>
          <div className="footer-icon">
            <BsTwitter className="footer-icon-import" />
          </div>
          <div className="footer-icon">
            <RiInstagramFill className="footer-icon-import" />
          </div>
          <div className="footer-icon">
            <BsLinkedin className="footer-icon-import" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

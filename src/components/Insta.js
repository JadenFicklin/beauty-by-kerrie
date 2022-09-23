import React, { useState } from "react";
import "../styles/Insta.css";
import { GrInstagram } from "react-icons/gr";

function Insta() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="insta-outer">
        Beauty by Kerrie<br></br>9 Posts <br></br>BROWS LIPS EYES <br></br>•
        MOST natural cosmetic tattoo in Charlotte, NC <br></br>• Over 6 years of
        experience <br></br>
        <br></br>
        DM for any inquiries and booking
      </div>
      <a
        className="follow-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="https://www.instagram.com/kerrieficklincosmetictattoo/"
        target="_blank"
        rel="noreferrer"
      >
        <GrInstagram className="insta-icon" />
        Follow
        {isHovered ? (
          <div className="follow-message">
            Clicking this will open Instagram in a new tab
            <div className="follow-arrow"></div>
          </div>
        ) : null}
      </a>
    </>
  );
}

export default Insta;

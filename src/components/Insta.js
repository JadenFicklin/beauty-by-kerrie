import React, { useState } from "react";
import "../styles/Insta.css";
import { GrInstagram } from "react-icons/gr";

function Insta() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="insta-outer">
        Beauty by Kerrie<br></br>
        301 Posts <br></br>BROWS LIPS EYES <br></br>• MOST natural cosmetic
        tattoo in Charlotte, NC <br></br>• Over 6 years of experience <br></br>
        <br></br>
        DM for any inquiries and booking
      </div>
      <div
        className="follow-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <GrInstagram className="insta-icon" />
        Follow
        {isHovered ? (
          <div className="follow-message">
            Clicking this will open Instagram in a new tab
            <div className="follow-arrow"></div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Insta;

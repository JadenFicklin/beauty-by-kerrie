import React, { useState } from "react";
import "../styles/Options.css";
import Insta from "./Insta";

function Options() {
  let mystring = ">";
  const [girl, setGirl] = useState(true);

  return (
    <>
      <div className="options-outer">
        <div className="options-top">
          <div className="boxes-top">
            <div className="box">
              <div className="lip-tattoo-top"></div>
              <div className="lip-tattoo-bottom">
                <div className="lip-tattoo-bottom-inner">
                  <div className="lip-tattoo-bottom-header h">Lip Tattoo</div>
                  <div className="lip-tattoo-bottom-sub-header s">
                    Enhance the shape and the color of your lips with the latest
                    lip blush tattoo
                  </div>
                  <div className="lip-tattoo-bottom-button b">
                    Read More {mystring}
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div
                className="box-decoration-inner"
                onMouseEnter={() => setGirl(false)}
                onMouseLeave={() => setGirl(true)}
              >
                <div className="girl"></div>
                <div className={girl ? "circle" : "circle-expanded"}></div>
              </div>
            </div>
            <div className="box">
              <div className="quote-box">
                <div className="quote">
                  The best decision I had made. Absolutely natural amazing long
                  lasting result.
                  <div className="quote-credit">jojo baggins</div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="fourth-box-top">
                <div className="fourth-box-picture"></div>
              </div>
              <div className="fourth-box-bottom">
                <div className="fourth-box-bottom-inner">
                  <div className="fourth-box-bottom-header h">
                    Permanent Eyeliner
                  </div>
                  <div className="fourth-box-bottom-sub-header s">
                    Smudge free defined Eyeliner
                  </div>
                  <div className="fourth-box-bottom-button b">
                    Read More {mystring}
                  </div>
                </div>
              </div>
            </div>
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

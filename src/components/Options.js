import React, { useState } from "react";
import "../styles/Options.css";
import Insta from "./Insta";

function Options() {
  const changeScroll = (position) => {
    window.scrollTo(0, position);
  };

  let mystring = ">";
  const [girl, setGirl] = useState(true);
  const [seventh, setSeventh] = useState(false);
  const [aboutMe, setAboutMe] = useState(true);

  const handleLipTattoo = () => {
    changeScroll(0);
  };
  const handleEyeliner = () => {
    changeScroll(0);
  };
  const handlePowderBrows = () => {
    changeScroll(0);
  };

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
                  <div
                    className="lip-tattoo-bottom-button b"
                    onClick={handleLipTattoo}
                  >
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
                  <div
                    className="fourth-box-bottom-button b"
                    onClick={handleEyeliner}
                  >
                    Read More {mystring}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boxes-bottom">
            <div
              className={aboutMe ? "box-wide" : "box-wide-clicked"}
              onClick={() => setAboutMe(!aboutMe)}
            >
              <div
                className={
                  aboutMe ? "box-wide-picture" : "box-wide-picture-clicked"
                }
              ></div>
              {aboutMe ? null : (
                <div className="about-me-clicked">
                  <div className="about-me-clicked-top">
                    <div className="about-me-clicked-top-picture"></div>
                    <div className="about-me-clicked-top-bottom">
                      Im a mom to 2 kids, a dog and wife! I enjoy being creative
                      <br></br>
                      <br></br>
                      and love to draw up all the tattoo ideas! I started out
                      doing permanent makeup at the beginning of my tattooing
                      career and fell in love with doing lips, so I decided to
                      focus my energy on Lips alone! But I have always felt like
                      I was missing the creative side that artistic tattooing
                      could give me, so I took on some more training and here I
                      am :)
                      <br></br>
                      <br></br>I love my job and I love working with people!
                      Send me any and all of your ideas :)
                      <br></br>
                      <br></br>
                      Lets see what we can create!
                    </div>
                  </div>
                  {aboutMe ? null : (
                    <div className="about-me-text-clicked">About Me</div>
                  )}
                  <div className="about-me-clicked-bottom">
                    <div className="about-me-clicked-bottom-left"></div>
                    <div className="about-me-clicked-bottom-picture"></div>
                  </div>
                </div>
              )}
            </div>
            {aboutMe ? <div className="about-me">About me</div> : null}
            <div className="box bot sixth-box">
              <div className="powder-brows-top"></div>
              <div className="powder-brows-bottom">
                <div className="powder-brows-bottom-inner">
                  <div className="permanent-brows-header h">
                    Permanent Powder Brows
                  </div>
                  <div className="permanent-brows-sub-header s">
                    Perfect for a more natural look
                  </div>
                  <div
                    className="permanent-brows-button b"
                    onClick={handlePowderBrows}
                  >
                    Read More {mystring}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="box bot seventh-box"
              onMouseEnter={() => setSeventh(true)}
              onMouseLeave={() => setSeventh(false)}
            >
              <div className="seventh-box-inner"></div>
              <div
                className={seventh ? "circle-two-expanded" : "circle-two"}
              ></div>
            </div>
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

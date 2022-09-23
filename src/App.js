import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
// import Nav from "./components/Nav";
// import Options from "./components/Options";
import "../src/styles/Nav.css";
import Insta from "../src/components/Insta";
import "../src/styles/Options.css";
import { IoArrowBackOutline } from "react-icons/io5";

function App() {
  const changeScroll = (position) => {
    window.scrollTo(0, position);
  };

  let mystring = ">";

  const [photo, setPhoto] = useState(true);

  const [girl, setGirl] = useState(true);
  const [seventh, setSeventh] = useState(false);
  const [aboutMe, setAboutMe] = useState(true);

  const [home, setHome] = useState(false);
  const [eyeliner, setEyeliner] = useState(false);
  const [lipBlush, setLipBlush] = useState(false);
  const [powderBrows, setPowderBrows] = useState(false);

  const [about, setAbout] = useState(true);
  const [photos, setPhotos] = useState(false);
  const [prices, setPrices] = useState(false);
  const [questions, setQuestions] = useState(false);
  const [pre, setPre] = useState(false);

  const [aboutTwo, setAboutTwo] = useState(true);
  const [photosTwo, setPhotosTwo] = useState(false);
  const [pricesTwo, setPricesTwo] = useState(false);
  const [questionsTwo, setQuestionsTwo] = useState(false);
  const [preTwo, setPreTwo] = useState(false);

  const [aboutThree, setAboutThree] = useState(true);
  const [photosThree, setPhotosThree] = useState(false);
  const [pricesThree, setPricesThree] = useState(false);
  const [questionsThree, setQuestionsThree] = useState(false);
  const [preThree, setPreThree] = useState(false);

  const handleHomeClick = () => {
    setHome(true);
    setEyeliner(false);
    setLipBlush(false);
    setPowderBrows(false);
  };
  const handleEyelinerClick = () => {
    changeScroll(0);

    setHome(false);
    setEyeliner(true);
    setLipBlush(false);
    setPowderBrows(false);
  };
  const handleLipBlushClick = () => {
    changeScroll(0);

    setHome(false);
    setEyeliner(false);
    setLipBlush(true);
    setPowderBrows(false);
  };
  const handlePowderBrowsClick = () => {
    changeScroll(0);

    setHome(false);
    setEyeliner(false);
    setLipBlush(false);
    setPowderBrows(true);
  };

  const handleAboutClick = () => {
    setAbout(true);
    setPhotos(false);
    setPrices(false);
    setQuestions(false);
    setPre(false);
  };
  const handlePhotosClick = () => {
    setAbout(false);
    setPhotos(true);
    setPrices(false);
    setQuestions(false);
    setPre(false);
  };
  const handlePricesClick = () => {
    setAbout(false);
    setPhotos(false);
    setPrices(true);
    setQuestions(false);
    setPre(false);
  };
  const handleQuestionsClick = () => {
    setAbout(false);
    setPhotos(false);
    setPrices(false);
    setQuestions(true);
    setPre(false);
  };
  const handlePreClick = () => {
    setAbout(false);
    setPhotos(false);
    setPrices(false);
    setQuestions(false);
    setPre(true);
  };
  // lip blush
  const handleAboutClickTwo = () => {
    setAboutTwo(true);
    setPhotosTwo(false);
    setPricesTwo(false);
    setQuestionsTwo(false);
    setPreTwo(false);
  };
  const handlePhotosClickTwo = () => {
    setAboutTwo(false);
    setPhotosTwo(true);
    setPricesTwo(false);
    setQuestionsTwo(false);
    setPreTwo(false);
  };
  const handlePricesClickTwo = () => {
    setAboutTwo(false);
    setPhotosTwo(false);
    setPricesTwo(true);
    setQuestionsTwo(false);
    setPreTwo(false);
  };
  const handleQuestionsClickTwo = () => {
    setAboutTwo(false);
    setPhotosTwo(false);
    setPricesTwo(false);
    setQuestionsTwo(true);
    setPreTwo(false);
  };
  const handlePreClickTwo = () => {
    setAboutTwo(false);
    setPhotosTwo(false);
    setPricesTwo(false);
    setQuestionsTwo(false);
    setPreTwo(true);
  };
  // powder brows
  const handleAboutClickThree = () => {
    setAboutThree(true);
    setPhotosThree(false);
    setPricesThree(false);
    setQuestionsThree(false);
    setPreThree(false);
  };
  const handlePhotosClickThree = () => {
    setAboutThree(false);
    setPhotosThree(true);
    setPricesThree(false);
    setQuestionsThree(false);
    setPreThree(false);
  };
  const handlePricesClickThree = () => {
    setAboutThree(false);
    setPhotosThree(false);
    setPricesThree(true);
    setQuestionsThree(false);
    setPreThree(false);
  };
  const handleQuestionsClickThree = () => {
    setAboutThree(false);
    setPhotosThree(false);
    setPricesThree(false);
    setQuestionsThree(true);
    setPreThree(false);
  };
  const handlePreClickThree = () => {
    setAboutThree(false);
    setPhotosThree(false);
    setPricesThree(false);
    setQuestionsThree(false);
    setPreThree(true);
  };

  // JSX
  // JSX
  // JSX
  // JSX
  // JSX

  return (
    <>
      {/* nav  */}
      {/* nav  */}
      {/* nav  */}
      {/* nav  */}
      {/* nav  */}

      <nav className="nav-outer">
        <div className="nav-home option" onClick={handleHomeClick}>
          HOME
        </div>
        <div
          className="nav-permanent-eyeliner option"
          onClick={handleEyelinerClick}
        >
          PERMANENT EYELINER
        </div>
        <div
          className="nav-permanent-lip-blush option"
          onClick={handleLipBlushClick}
        >
          PERMANENT LIP BLUSH
        </div>
        <div
          className="nav-permanent-powder-brows option"
          onClick={handlePowderBrowsClick}
        >
          PERMANENT POWDER BROWS
        </div>
      </nav>
      <div className="nav-background"></div>

      <div className="background-palm-leaves"></div>
      <div className="background-palm-leaves-shading"></div>

      {/* home  */}
      {/* home  */}
      {/* home  */}
      {/* home  */}
      {/* home  */}

      {home ? (
        <>
          {" "}
          <Landing />
          <Banner />
          <div className="options-outer">
            <div className="options-top">
              <div className="boxes-top">
                <div className="box">
                  <div className="lip-tattoo-top"></div>
                  <div className="lip-tattoo-bottom">
                    <div className="lip-tattoo-bottom-inner">
                      <div className="lip-tattoo-bottom-header h">
                        Lip Tattoo
                      </div>
                      <div className="lip-tattoo-bottom-sub-header s">
                        Enhance the shape and the color of your lips with the
                        latest lip blush tattoo
                      </div>
                      <div
                        className="lip-tattoo-bottom-button b"
                        onClick={handleLipBlushClick}
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
                      The best decision I had made. Absolutely natural amazing
                      long lasting result.
                      <div className="quote-credit">Anna McTaggart</div>
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
                        onClick={handleEyelinerClick}
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
                      <div className="about-me-back-button">
                        <IoArrowBackOutline className="about-me-back-button-inner" />
                      </div>
                      <div className="about-me-clicked-top">
                        <div className="about-me-clicked-top-picture"></div>
                        <div className="about-me-clicked-top-bottom">
                          Im a mom to 2 kids, a dog and wife! I enjoy being
                          creative
                          <br></br>
                          <br></br>
                          and love to draw up all the tattoo ideas! I started
                          out doing permanent makeup at the beginning of my
                          tattooing career and fell in love with doing lips, so
                          I decided to focus my energy on Lips alone! But I have
                          always felt like I was missing the creative side that
                          artistic tattooing could give me, so I took on some
                          more training and here I am :)
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
                        onClick={handlePowderBrowsClick}
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
          <Footer />{" "}
        </>
      ) : null}

      {/* permanent eyeliner  */}
      {/* permanent eyeliner  */}
      {/* permanent eyeliner  */}
      {/* permanent eyeliner  */}
      {/* permanent eyeliner  */}

      <div className={eyeliner ? "eyeliner-page-true" : "eyeliner-page-false"}>
        <div className="eyeliner-page-left">
          {eyeliner ? (
            <div
              className="eyeliner-page-about ribbon"
              onClick={handleAboutClick}
            >
              <div className="about-text text-ribbon">About</div>
              <div className="edge"></div>
            </div>
          ) : null}
          {eyeliner ? (
            <div
              className="eyeliner-page-photos ribbon"
              onClick={handlePhotosClick}
            >
              <div className="photos-text text-ribbon">Photos</div>
              <div className="edge"></div>
            </div>
          ) : null}
          {eyeliner ? (
            <div
              className="eyeliner-page-prices ribbon"
              onClick={handlePricesClick}
            >
              <div className="prices-text text-ribbon">Prices</div>
              <div className="edge"></div>
            </div>
          ) : null}
          {eyeliner ? (
            <div
              className="eyeliner-page-questions ribbon"
              onClick={handleQuestionsClick}
            >
              <div className="questions-and-answers-text text-ribbon">
                Questions and Answers
              </div>
              <div className="edge"></div>
            </div>
          ) : null}
          {eyeliner ? (
            <div
              className="eyeliner-page-pre-and-post ribbon"
              onClick={handlePreClick}
            >
              <div className="pre-and-post-care-text text-ribbon">
                Pre and Post Care
              </div>
              <div className="edge"></div>
            </div>
          ) : null}
        </div>
        <div className="eyeliner-page-right">
          <div className="eyeliner-page-right-inner">
            {eyeliner && about ? (
              <div className="about-in">
                <div className="about-he">Description</div>
                <div className="about-su">
                  Permanent eyeliner is an Enhancing tattoo that helps to define
                  your eyes! You can have it applied as subtle as you would like
                  for a more natural look (called a Lash Enhancement - where
                  most of the pigment is embedded into your lash line) or a more
                  noticeable look with above the lash line with or without a
                  wing, with or without bottom liner. I do not recommend getting
                  dramatic liners, as your preference can change.
                </div>
              </div>
            ) : null}
            {photos ? (
              <div className="eye-photos-inner">
                <div
                  className={
                    photo ? "eye-photo-one photo" : "eye-photo-one photo-false"
                  }
                  onClick={() => setPhoto(!photo)}
                ></div>
                <div
                  className={
                    photo ? "eye-photo-two photo" : "eye-photo-two photo-false"
                  }
                  onClick={() => setPhoto(!photo)}
                ></div>
                <div
                  className={
                    photo
                      ? "eye-photo-three photo"
                      : "eye-photo-three photo-false"
                  }
                  onClick={() => setPhoto(!photo)}
                ></div>
              </div>
            ) : null}
            {prices ? (
              <div className="prices-eyeliner-inner">
                <div className="about-he">Prices:</div> <br></br>
                <div className="about-su">
                  <span className="heading">Primary and Color Corrections</span>{" "}
                  <br></br>
                  <span className="sub-heading">
                    First time or correcting a color previously applied
                  </span>{" "}
                  <br></br>
                  <span className="price">$350 and up</span> <br></br>
                  <br></br>
                  <span className="heading">Touchups</span> <br></br>
                  <span className="sub-heading">
                    I highly recommend getting a touch up 4-6 weeks after your
                    first initial appointment. Not everyone heals the same so we
                    can make adjustments if we need to. Any after that will be
                    charged according to how long it's been since your last
                    appointment with me.
                  </span>{" "}
                  <br></br>
                  <span className="price">4-10 weeks/ $100</span> <br></br>
                  <br></br>
                  <span className="heading">Color Boost</span> <br></br>
                  <span className="sub-heading">
                    If your application needs a color boost but has been more
                    than 6 months since the primary application, or it got
                    applied by someone else, but no more than 18 months
                  </span>{" "}
                  <br></br>
                  <span className="price">$250 and up</span> <br></br>‍
                </div>
              </div>
            ) : null}
            {questions ? <div>questions</div> : null}
            {pre ? <div>pre</div> : null}
          </div>
        </div>
      </div>

      {/* Lip blush  */}
      {/* Lip blush  */}
      {/* Lip blush  */}
      {/* Lip blush  */}
      {/* Lip blush  */}
      <div className={lipBlush ? "eyeliner-page-true" : "eyeliner-page-false"}>
        <div className="eyeliner-page-left">
          {lipBlush ? (
            <div
              className="eyeliner-page-about ribbon"
              onClick={handleAboutClickTwo}
            >
              <div className="about-text text-ribbon">About</div>
              <div className="edge"></div>
            </div>
          ) : null}
          {lipBlush ? (
            <div
              className="eyeliner-page-photos ribbon"
              onClick={handlePhotosClickTwo}
            >
              <div className="photos-text text-ribbon">Photos</div>
              <div className="edge"></div>
            </div>
          ) : null}
          {lipBlush ? (
            <div
              className="eyeliner-page-prices ribbon"
              onClick={handlePricesClickTwo}
            >
              <div className="prices-text text-ribbon">Prices</div>
              <div className="edge"></div>
            </div>
          ) : null}
          {lipBlush ? (
            <div
              className="eyeliner-page-questions ribbon"
              onClick={handleQuestionsClickTwo}
            >
              <div className="questions-and-answers-text text-ribbon">
                Questions and Answers
              </div>
              <div className="edge"></div>
            </div>
          ) : null}
          {lipBlush ? (
            <div
              className="eyeliner-page-pre-and-post ribbon"
              onClick={handlePreClickTwo}
            >
              <div className="pre-and-post-care-text text-ribbon">
                Pre and Post Care
              </div>
              <div className="edge"></div>
            </div>
          ) : null}
        </div>
        <div className="eyeliner-page-right">
          <div className="eyeliner-page-right-inner">
            {aboutTwo ? <div>about Two</div> : null}
            {photosTwo ? <div>photos Two</div> : null}
            {pricesTwo ? <div>prices Two</div> : null}
            {questionsTwo ? <div>questions Two</div> : null}
            {preTwo ? <div>pre Two</div> : null}
          </div>
        </div>
      </div>

      {/* powder brows  */}
      {/* powder brows  */}
      {/* powder brows  */}
      {/* powder brows  */}
      {/* powder brows  */}
      <div
        className={powderBrows ? "eyeliner-page-true" : "eyeliner-page-false"}
      >
        <div className="eyeliner-page-left">
          {powderBrows ? (
            <div
              className="eyeliner-page-about ribbon"
              onClick={handleAboutClickThree}
            >
              <div className="about-text text-ribbon">About</div>
              <div className="edge"></div>
            </div>
          ) : null}
          {powderBrows ? (
            <div
              className="eyeliner-page-photos ribbon"
              onClick={handlePhotosClickThree}
            >
              <div className="photos-text text-ribbon">Photos</div>
              <div className="edge"></div>
            </div>
          ) : null}
          {powderBrows ? (
            <div
              className="eyeliner-page-prices ribbon"
              onClick={handlePricesClickThree}
            >
              <div className="prices-text text-ribbon">Prices</div>
              <div className="edge"></div>
            </div>
          ) : null}
          {powderBrows ? (
            <div
              className="eyeliner-page-questions ribbon"
              onClick={handleQuestionsClickThree}
            >
              <div className="questions-and-answers-text text-ribbon">
                Questions and Answers
              </div>
              <div className="edge"></div>
            </div>
          ) : null}
          {powderBrows ? (
            <div
              className="eyeliner-page-pre-and-post ribbon"
              onClick={handlePreClickThree}
            >
              <div className="pre-and-post-care-text text-ribbon">
                Pre and Post Care
              </div>
              <div className="edge"></div>
            </div>
          ) : null}
        </div>
        <div className="eyeliner-page-right">
          <div className="eyeliner-page-right-inner">
            {aboutThree ? <div>about Three</div> : null}
            {photosThree ? <div>photos Three</div> : null}
            {pricesThree ? <div>prices Three</div> : null}
            {questionsThree ? <div>questions Three</div> : null}
            {preThree ? <div>pre Three</div> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

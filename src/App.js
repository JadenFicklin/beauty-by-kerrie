import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
// import Nav from "./components/Nav";
import Options from "./components/Options";
import "../src/styles/Nav.css";

function App() {
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
    setHome(false);
    setEyeliner(true);
    setLipBlush(false);
    setPowderBrows(false);
  };
  const handleLipBlushClick = () => {
    setHome(false);
    setEyeliner(false);
    setLipBlush(true);
    setPowderBrows(false);
  };
  const handlePowderBrowsClick = () => {
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
          <Options />
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
            {about ? <div>about</div> : null}
            {photos ? <div>photos</div> : null}
            {prices ? <div>prices</div> : null}
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

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

  return (
    <>
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
      {home ? (
        <>
          {" "}
          <Landing />
          <Banner />
          <Options />
          <Footer />{" "}
        </>
      ) : null}

      <div className={eyeliner ? "eyeliner-page-true" : "eyeliner-page-false"}>
        <div className="eyeliner-page-left">
          <div className="eyeliner-page-about ribbon">
            <div className="about-text text-ribbon">About</div>
            <div className="edge"></div>
          </div>
          <div className="eyeliner-page-photos ribbon">
            <div className="photos-text text-ribbon">Photos</div>
            <div className="edge"></div>
          </div>
          <div className="eyeliner-page-prices ribbon">
            <div className="prices-text text-ribbon">Prices</div>
            <div className="edge"></div>
          </div>
          <div className="eyeliner-page-questions ribbon">
            <div className="questions-and-answers-text text-ribbon">
              Questions and Answers
            </div>
            <div className="edge"></div>
          </div>
          <div className="eyeliner-page-pre-and-post ribbon">
            <div className="pre-and-post-care-text text-ribbon">
              Pre and Post Care
            </div>
            <div className="edge"></div>
          </div>
        </div>
        <div className="eyeliner-page-right"></div>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Insta from "./components/Insta";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Options from "./components/Options";

function App() {
  return (
    <>
      <div className="background-palm-leaves"></div>
      <div className="background-palm-leaves-shading"></div>
      <Nav />
      <Landing />
      <Banner />
      {/* <Options /> */}
      {/* <Insta /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;

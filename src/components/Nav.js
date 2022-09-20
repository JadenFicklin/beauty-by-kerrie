import React from "react";
import "../styles/Nav.css";

function Nav() {
  return (
    <>
      <nav className="nav-outer">
        <div className="nav-home">HOME</div>
        <div className="nav-permanent-eyeliner">PERMANENT EYELINER</div>
        <div className="nav-permanent-lip-blush">PERMANENT LIP BLUSH</div>
        <div className="nav-permanent-powder-brows">PERMANENT POWDER BROWS</div>
      </nav>
    </>
  );
}

export default Nav;

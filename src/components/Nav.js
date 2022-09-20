import React from "react";
import "../styles/Nav.css";

function Nav() {
  return (
    <>
      <nav className="nav-outer">
        <div className="nav-home option">HOME</div>
        <div className="nav-permanent-eyeliner option">PERMANENT EYELINER</div>
        <div className="nav-permanent-lip-blush option">
          PERMANENT LIP BLUSH
        </div>
        <div className="nav-permanent-powder-brows option">
          PERMANENT POWDER BROWS
        </div>
      </nav>
    </>
  );
}

export default Nav;

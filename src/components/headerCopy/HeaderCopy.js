import "./HeaderCopy.css";
import logo from "./../../img/logo/logo.png";
// import burger from "./../../img/hero/menu-bar.png";

import React, { useState } from "react";

import { Link } from "react-router-dom";

function HeaderCopy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuIsOpen, setsubmenuIsOpen] = useState(false);

  return (
    <>
      <div className="header-area">
        <div className="logo">
          <a href="index.html">
            <img style={{ paddingLeft: 20 }} src={logo} alt="logo" />
          </a>
        </div>
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <button type="click" className="menuBurger-Btn">
            <div className="menuBurger_lines">
            <div >--</div>
            <div >--</div>
            <div >--</div>
            </div>
            MENU
           
            {/* <img src={burger} alt="burger"></img> */}
          </button>
        </div>
        <div className={`main-menu ${menuOpen ? "open" : ""}`}>
          <nav>
            <ul id="navigation" style={{ marginRight: 30 }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>

              <li className="submenu">
                <Link
                  className={`submenu_toggle ${submenuIsOpen ? "open" : ""}`}
                  onClick={() => setsubmenuIsOpen(submenuIsOpen)}
                >
                  Blog
                </Link>
                <ul className="submenu_link">
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/events details">Events Details</Link>
                  </li>
                  <li>
                    <Link to="/blog details">Blog Details</Link>
                  </li>
                  <li>
                    <Link tp="/elements details">Element</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li className="button-header">
                <a href="#!" className="header-btn">
                  <i className="fas fa-phone-alt"></i>
                  +10 (78) 738-9083
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default HeaderCopy;

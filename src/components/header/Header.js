import logo from "./../../img/logo/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header-area">
        <div className="logo">
          <a href="index.html">
            <img style={{ paddingLeft: 20 }} src={logo} alt="logo" />
          </a>
        </div>
        <div className="main-menu d-none d-lg-block">
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
              <li>
                <li className="submenu">
                  <Link>Blog</Link>
                  <ul className="submenu_link">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="events_details.html">Events Details</a>
                    </li>
                    <li>
                      <a href="blog_details.html">Blog Details</a>
                    </li>
                    <li>
                      <a href="elements.html">Element</a>
                    </li>
                  </ul>
                </li>
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

export default Header;

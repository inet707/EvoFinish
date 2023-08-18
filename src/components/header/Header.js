import logo from "./../../img/logo/Logo Luxury.png";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header-area">
        <div className="logo">
          <a href="index.html">
            <img style={{ height: 110 }} src={logo} alt="logo" />
          </a>
        </div>
        <div className="main-menu d-none d-lg-block">
          <nav>
            <ul id="navigation" style={{marginRight:30}}>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="event.html">Events</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <li className="submenu">
                  <a href="#!">Blog</a>
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
                <a href="contact.html">Contact</a>
              </li>

              <li className="button-header">
                
                <a href="#!" className="header-btn">
                  <i className="fas fa-phone-alt"></i>
                  +994 (55) 203-43-33
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

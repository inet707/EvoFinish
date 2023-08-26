import "./AboutUs.css";

import AboutPng from "./../../img/gallery/about.png";
import Founder from "./../../img/gallery/founder-img.png";
import AboutPng2 from "./../../img/gallery/about2.png";

import CardArea from "./cardArea/CardArea";
import VideoArea from "../videoArea/VideoArea";

function AboutUs() {
  return (
    <>
      <div className="aboutUs_Container">
        <div className="aboutCompany">
          <div className="aboutCompany_Img">
            <img src={AboutPng} alt="about.png" />
          </div>
          <div className="aboutCompany_Right">
            <div className="aboutCompny_section-tittle">
              <span className="aboutCompany_Text1">About Us</span>
              <h2 className="aboutCompany_Text2">
                Get ready for real time adventure
              </h2>
            </div>
            <div className="aboutCompany_support-caption">
              <p className="aboutCompany_Text3">
                Let's start your journey with us, your dream will come true.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation.
              </p>
              <a href="about.html" className="about-btn">
                Book Your Destination
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="customersComment_Area">
        <div className="customersComment">
          <h2 className="customerComment_Title">What customers say</h2>
          <p className="customerComment_Text">
            "Let's start your journey with us, your dream will come true. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="founder_Area">
          <div className="founder_Img">
            <img src={Founder} alt="founder" />
          </div>
          <div className="founder_Text_area">
            <span className="founder_Text_Name">Mark Anthony</span>
            <p className="founder_Text_Job">CEO of Colorlib</p>
          </div>
        </div>
      </div>

      <div className="services_Section">
        <span className="aboutCompany_Text1">FAQ</span>
        <h2 className="aboutCompany_Text2">Full range of travel service</h2>
      </div>

      <div className="services_Cards_arena">
        <div className="card_Area">
          <CardArea />
        </div>

        <div className="card-right-img">
          <img src={AboutPng2} alt="services img" />
        </div>
      </div>

      <div className="btn_center">
        <a href="#!" className="about-btn">
          Book Your Destination
        </a>
      </div>
      <VideoArea />
    </>
  );
}

export default AboutUs;

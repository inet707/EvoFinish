import React from "react";
import BackgroundiMG from "./../../backgroundimage/BackgroundiMG";
import BackgroundImage from "./../../../img/hero/h1_hero4.jpg";
import AboutUs from "../../aboutUs/AboutUs";
import FooterCarousel from "../../fouterCarousel/FooterCarousel";

function About() {
    return (
     <>
 <BackgroundiMG   
 backgroundimage={BackgroundImage}
      title="About Us" 
      />
<AboutUs/>
<FooterCarousel/>
  
     </>
    );
  }
  
  export default About;
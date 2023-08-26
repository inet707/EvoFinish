import React from "react";
import BackgroundiMG from "../../backgroundimage/BackgroundiMG";
import BackgroundImage from "./../../../img/hero/h1_hero5.jpg";
import Blogcards from "./../../blogCards/Blogcards";


function Blog() {
    return (
     <>
   <BackgroundiMG backgroundimage={BackgroundImage} title="Blog"/>
   <Blogcards/>
  
     </>
    );
  }
  
  export default Blog;
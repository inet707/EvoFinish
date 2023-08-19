import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FooterCarousel.css";
import Instra1 from "./../../img/gallery/instra1.jpg";
import Instra2 from "./../../img/gallery/instra2.jpg";
import Instra3 from "./../../img/gallery/instra3.jpg";
import Instra4 from "./../../img/gallery/instra4.jpg";
import Instra5 from "./../../img/gallery/instra5.jpg";


function FooterCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // 3 şəkli eyni vaxtda göstər
    slidesToScroll: 1,
    autoplay: true, // Avtomatik hərəkat
    autoplaySpeed:3000 , // 1 saniyədən bir hərəkat
  };

  return (
    <Slider {...settings}>
        
      <div className="carousel_Footer">
        <img className="carousel_Footer_Img" src={Instra1} alt="img_1" />
      </div>
      <div className="carousel_Footer">
        <img className="carousel_Footer_Img" src={Instra2} alt="img_2" />
      </div>
      <div className="carousel_Footer">
        <img className="carousel_Footer_Img" src={Instra3} alt="img_3" />
      </div>
      <div className="carousel_Footer">
        <img className="carousel_Footer_Img" src={Instra4} alt="img_4" />
      </div>
      <div className="carousel_Footer">
        <img className="carousel_Footer_Img" src={Instra5} alt="img_5" />
      </div>
      <div className="carousel_Footer">
        <img className="carousel_Footer_Img" src={Instra2} alt="img_5" />
      </div>
      <div className="carousel_Footer">
        <img className="carousel_Footer_Img" src={Instra4} alt="img_5" />
      </div>
      
      
      
    </Slider>
  );
}

export default FooterCarousel;

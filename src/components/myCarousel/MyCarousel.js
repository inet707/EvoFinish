import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MyCarousel.css";
import Services1 from "./../../img/gallery/services1.jpg";
import Services2 from "./../../img/gallery/services2.jpg";
import Services3 from "./../../img/gallery/services3.jpg";
import Services4 from "./../../img/gallery/services4.jpg";
import Services5 from "./../../img/gallery/services5.jpg";
import Services6 from "./../../img/gallery/services6.jpg";

function MyCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 şəkli eyni vaxtda göstər
    slidesToScroll: 1,
    autoplay: true, // Avtomatik hərəkat
    autoplaySpeed: 3000, // 1 saniyədən bir hərəkat
  };

  return (
    <Slider {...settings}>
      <div className="carousel_Card">
        <img className="carousel_Img" src={Services1} alt="img 1" />
        <div className="carousel_Card_Textarea">
          <div className="carousel_Card_Country">
            <div className="carousel_Country">
              <a href="events_details.html"> Azerbaijan </a>
            </div>
            <div className="price">$1200</div>
          </div>
          <div className="card_Days">
            <p>
              <a className="card_Date" href="#!">
                12 Jan - 18 Jan
              </a>
              5 Days
            </p>
          </div>
        </div>
      </div>
      <div className="carousel_Card">
        <img className="carousel_Img" src={Services2} alt="img 2" />
        <div className="carousel_Card_Textarea">
          <div className="carousel_Card_Country">
            <div className="carousel_Country">
              <a href="events_details.html"> Mega Africa </a>
            </div>
            <div className="price">$1200</div>
          </div>
          <div className="card_Days">
            <p>
              <a className="card_Date" href="#!">
                12 Jan - 18 Jan
              </a>
              5 Days
            </p>
          </div>
        </div>
      </div>
      <div className="carousel_Card">
        <img className="carousel_Img" src={Services3} alt="img 3" />
        <div className="carousel_Card_Textarea">
          <div className="carousel_Card_Country">
            <div className="carousel_Country">
              <a href="events_details.html"> Finland </a>
            </div>
            <div className="price">$1200</div>
          </div>
          <div className="card_Days">
            <p>
              <a className="card_Date" href="#!">
                12 Jan - 18 Jan
              </a>
              5 Days
            </p>
          </div>
        </div>
      </div>
      <div className="carousel_Card">
        <img className="carousel_Img" src={Services4} alt="img 4" />
        <div className="carousel_Card_Textarea">
          <div className="carousel_Card_Country">
            <div className="carousel_Country">
              <a href="events_details.html"> Spitzberg </a>
            </div>
            <div className="price">$1200</div>
          </div>
          <div className="card_Days">
            <p>
              <a className="card_Date" href="#!">
                12 Jan - 18 Jan
              </a>
              5 Days
            </p>
          </div>
        </div>
      </div>
      <div className="carousel_Card">
        <img className="carousel_Img" src={Services5} alt="img 5" />
        <div className="carousel_Card_Textarea">
          <div className="carousel_Card_Country">
            <div className="carousel_Country">
              <a href="events_details.html"> Venice </a>
            </div>
            <div className="price">$1200</div>
          </div>
          <div className="card_Days">
            <p>
              <a className="card_Date" href="#!">
                12 Jan - 18 Jan
              </a>
              5 Days
            </p>
          </div>
        </div>
      </div>
      <div className="carousel_Card">
        <img className="carousel_Img" src={Services6} alt="img 6" />
        <div className="carousel_Card_Textarea">
          <div className="carousel_Card_Country">
            <div className="carousel_Country">
              <a href="events_details.html"> Turkey </a>
            </div>
            <div className="price">$1200</div>
          </div>
          <div className="card_Days">
            <p>
              <a className="card_Date" href="#!">
                12 Jan - 18 Jan
              </a>
              5 Days
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default MyCarousel;

import "./HomeMain.css";
import carPng from "./../../img/hero/car.png";
import MyCarousel from "./../myCarousel/MyCarousel";
import AboutUs from "./../aboutUs/AboutUs";
import FooterCarousel from "../fouterCarousel/FooterCarousel";
import UpcomingTextComp from "../upcomingTextComp/UpcomingTextComp";
import ScrollUpButton from "./../scroLUpButton/ScrollUpButton";

function HomeMain() {
  return (
    <>
      <main>
        <div className="containerAfterNav">
          <div className="centerBlock">
            <div className="cologne">
              <div className="text-center">
                <p className="text_Lifelong">
                  Lifelong memories just a
                  <div style={{ paddingTop: 20 }}>few seconds away</div>
                  <div className="yellowBack">i</div>
                </p>
                <p className="text_Lets">
                  Let’s start your journey with us, your dream will come true
                </p>

                <a href="#!" className="slider-btn">
                  Explore Destinations
                </a>
              </div>
            </div>
          </div>
        </div>

        <ScrollUpButton/>

        <div className="animated_Car">
          <div className="car_slider">
            <img src={carPng} alt="car" />
          </div>
        </div>

        <UpcomingTextComp />
        <MyCarousel />
        <AboutUs />
        <FooterCarousel />
      </main>
    </>
  );
}

export default HomeMain;

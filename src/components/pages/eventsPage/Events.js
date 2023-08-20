import React from "react";
import BackgroundiMG from "./../../backgroundimage/BackgroundiMG";
import BackgroundImage from "./../../../img/hero/h1_hero2.jpg";
import UpcomingTextComp from "../../upcomingTextComp/UpcomingTextComp";
import EventsCards from "../../eventsCardcomponents/EventsCards";
import VideoArea from "../../videoArea/VideoArea";
import FooterCarousel from "../../fouterCarousel/FooterCarousel";

function Events() {
  return (
    <>
      <BackgroundiMG backgroundimage={BackgroundImage} title="All Events" />
      <UpcomingTextComp />
      <EventsCards />
      <VideoArea />
      <FooterCarousel />
    </>
  );
}

export default Events;

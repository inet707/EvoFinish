import React, { useState, useEffect } from "react";
import "./ScrollUpButton.css";
import ScrollToTop from "./../../img/hero/arrow.png";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!isVisible && window.scrollY > 400) {
        setIsVisible(true);
      } else if (isVisible && window.scrollY <= 400) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        className="scroll_BTN"
        onClick={scrollToTop}
        style={{
          position: "fixed",
          left: "2%",
          bottom: "5%",
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <img src={ScrollToTop} alt="" />
        TO TOP
      </button>
    )
  );
};

export default ScrollUpButton;

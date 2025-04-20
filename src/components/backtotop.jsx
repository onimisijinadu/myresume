import React from "react";
import "../styling/BackUp.css";
import { FaArrowCircleUp } from "react-icons/fa";
export default function Backtotop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };
  return (
    <button className="backtoTop" onClick={scrollToTop}>
      <FaArrowCircleUp />
    </button>
  );
}

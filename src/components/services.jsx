import React from "react";
import { FaCss3, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa6";
import "/src/styling/service.css";
import Frontend from "/src/assets/frontend.jpg";

export default function Service() {
  return (
    <div id="service">
      <div className="service-container">
        <div className="service-info">
          <h2>Service</h2>
          <h3>Front End Development</h3>

          <p>
            i build responsive, interactive and visually engaging user
            interfaces using modern web technologies like HTML, CSS, and
            JavaScript. I also use frameworks like React to create dynamic web
            applications that provide a seamless user experience. My focus is on
            performace, accessibility, and creating seamless user experiences
            that look great on any device.
          </p>
          {/* <div>
          <progress value="90" max="100"></progress>
        </div> */}
        </div>
        <img src={Frontend} alt="Front Development" className="frontend" />
      </div>
    </div>
  );
}

import React from "react";
import EliteDev from "/src/assets/elitedev.jpg";
import "/src/styling/about.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
export default function About() {
  return (
    <div id="about">
      <div className="about">
        <div className="image-container">
          <img src={EliteDev} alt="EliteDev Photo" className="elite" />
          <div className="favicons">
            <a
              href="https://www.linkedin.com/in/jinadu-abdulkareem-b68672265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://discordapp.com/users/lebuy./" target="_blank">
              <FaDiscord />
            </a>
            <a href="https://t.me/Elite_Dev_0" target="_blank">
              <FaTelegram />
            </a>
          </div>
        </div>
        <div className="aboutMe">
          <h2>
            Hi, I'm Jinadu Abdulkareem, a passionate web developer focused on
            crafting visually appealing and user-friendly websites.
          </h2>
          <p>
            Looking for a top-notch web developer to revamp your websites? look
            no further. with a strong eye for details and flair for intuitive
            design, i specialied in turning complex problems into clean,
            efficient, and engaging digital solutions. whether you're starting
            fresh or aiming to elevate your brand online, i'm here to bring your
            vision to life and help you stand out in the digital space{" "}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

import React from "react";
import { FaDiscord, FaLinkedin, FaTelegram } from "react-icons/fa";
import "../styling/footer.css";
import bgimg from "../assets/footer.jpg";

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer" style={{ backgroundImage: `url(${bgimg})` }}>
        <div className="footer-text">
          <h3>Let's connect and create something awesome together!</h3>
          <p>
            <a
              href="mailto:jinaduabdulkareemonimisi@gmail.com"
              className="contact-email"
              target="_ blank"
            >
              jinaduabdulkareemonimisi@gmail.com
            </a>
          </p>
        </div>
        <div className="favicons_ico">
          <a
            href="https://www.linkedin.com/in/jinadu-abdulkareem-b68672265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://discordapp.com/users/lebuy./" target="_blank">
            <FaDiscord />
          </a>
          <a href="t.me/Elite_Dev_0" target="_blank">
            <FaTelegram />
          </a>
        </div>
      </footer>
      <hr></hr>
      <div className="copyright">
        <p> &copy; 2025 EliteDev</p>
      </div>
    </div>
  );
}

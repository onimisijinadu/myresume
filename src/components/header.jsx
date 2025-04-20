import React from "react";
import { useState } from "react";
import "/src/styling/style.css";
import logo from "/Elite.svg";
import bgimage from "/src/assets/background.jpg";
import FreakyPlus from "/src/assets/logo.svg";
import { Link } from "react-router-dom";
import About from "./about";
import Service from "./services";
import Footer from "./footer";
// import lear from "/src/assets/elitedev.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="header"
        id="home"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        {/* Navigation Bar */}
        <section className="Header-head">
          <div className="header-left">
            <img src={logo} alt="EliteDev logo" className="logo" />
            <h1 className="Devname">
              <span className="white">Elite</span>
              <span className="purple">Dev</span>
            </h1>
          </div>
          {/* Desktop Links */}
          <nav className="navlinks">
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#service">Services</a>
            <a href="#testimonials">Testimonials</a>
          </nav>
          {/* Cta Button */}
          <button className="cta-button">Lets Connect</button>
          {/* Hamburger (mobile) */}
          <div
            className={`hanburger ${isOpen ? "active" : ""} `}
            onClick={() => setIsOpen((open) => !open)}
          >
            <div className="item item1"></div>
            <div className="item item2 "></div>
            <div className="item item3"></div>
          </div>
        </section>
        {/* Mobile slide-in nav */}
        <nav className={`mobile-nav ${isOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#service" onClick={() => setIsOpen(false)}>
            Portfolio
          </a>
          <a href="#service" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>
            Testimonials
          </a>
        </nav>
        n
        <div
          className={`mobile-overlay ${isOpen ? "show" : ""}`}
          onClick={() => setIsOpen(false)}
        />
        <section className="Header-Content">
          <h1>
            EliteDev <br /> freelance web developer
          </h1>
          <p>
            Transforming ideas into powerful digital experiences, Pro
            development services by EliteDev freelancer for your website needs
          </p>
          <div className="hero-cta">
            <a href="t.me/Elite_Dev_0" target="_blank">
              <button className="connect">Let's Connect</button>
            </a>

            <button className="mywork">Check my work</button>
          </div>

          <div className="collaborate">
            <p>PROUDLY COLLABORATED WITH ONE OF THE BIGGEST BRAND</p>
          </div>
          <div className="brand-logo">
            <img src={FreakyPlus} alt="logo" />
            <p>FreakyPlus</p>
          </div>
        </section>
      </div>
    </>
  );
}

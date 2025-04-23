import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "../styling/testimonial.css";
import Ethan from "../assets/malereview.jpg";
import Samuel from "../assets/malereview2.jpg";
import Luke from "../assets/malereview3.jpg";
import Aisha from "../assets/muslimfemale (1).jpg";
import Grace from "../assets/femalereview3.jpg";
import Mokoena from "../assets/femalereview2.jpg";

export default function Testimonial() {
  return (
    <div id="testimonials">
      <div className="testimonials">
        <h1>See why they love my work</h1>
        {/* male testimonial #1 */}
        <div className="testimonal-container">
          <div className="person">
            <div className="Star_icons">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="quote">
              Jinadu transformed our concept into a sleek, responsive website.
              His mastery of react and attention to details made the whole
              process seamless-our users love the new interface
            </p>
            <div className="testimonal_image">
              <img src={Ethan} alt="photo of Ethan" className="photos" />
              <h4>Ethan Williams</h4>
            </div>
          </div>
          {/* male testimonial #2 */}
          <div className="person">
            <div className="Star_icons">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p className="quote">
              Working with Jinadu was a breath of fresh air. He refactored our
              legacy codebase in record time and brought modern JavaScript best
              practices to the table. Highly recommended!
            </p>
            <div className="testimonal_image">
              <img src={Luke} alt="photo of Luke" className="photos" />
              <h4>Luke Thompson</h4>
            </div>
          </div>
          {/* male testimonial #3 */}
          <div className="person">
            <div className="Star_icons">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p className="quote">
              Jinadu's front.end skills are outstanding. He build us a custom
              dashboard in react that's fast, accessible, and easy for our whole
              team to maintain. He truly understands UX.
            </p>
            <div className="testimonal_image">
              <img src={Samuel} alt="photo of Samuel" className="photos" />
              <h4>Samuel Okoye</h4>
            </div>
          </div>
          {/* female testimonial #1 */}
          <div className="person">
            <div className="Star_icons">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="quote">
              From the initial wireframes to the final deployment, Jinadu was
              professional, communicate, and detail_oriented. Our site's
              performance and conversions have already improved.
            </p>
            <div className="testimonal_image">
              <img src={Aisha} alt="photo of Aisha" className="photos" />
              <h4>Aisha Adeyemi</h4>
            </div>
          </div>
          {/* female testimonial #2 */}
          <div className="person">
            <div className="Star_icons">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p className="quote">
              I needed a portfolio that really stood out-Jinadu delivered beyond
              expectations. His CSS and design sense are spot_on, and the end
              result is both beautiful and performant.
            </p>
            <div className="testimonal_image">
              {" "}
              <img src={Mokoena} alt="photo of Thandiwe" className="photos" />
              <h4>Thandiwe Mokoena</h4>
            </div>
          </div>
          {/* female testimonial #3 */}
          <div className="person">
            <div className="Star_icons">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="quote">
              Jinadu took our vision and turned it into a pixel_perfect reality.
              He's fast, reliable, and an expert at turning complex requirements
              into a smooth user experience.
            </p>
            <div className="testimonal_image">
              <img src={Grace} alt="photo of Grace" className="photos" />
              <h4>Grace Harrison</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

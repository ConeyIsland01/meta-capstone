import React from "react";
import img from "../../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <section>
        <article>
          <h1>Little Lemon</h1>

          <h2>Chicago</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <div className="button" style={{ width: "120px" }}>
            <Link to="/booking">Reservations</Link>
          </div>
        </article>
      </section>

      <section>
        <img src={img} alt="Little Lemon" />
      </section>
    </div>
  );
};
export default Hero;

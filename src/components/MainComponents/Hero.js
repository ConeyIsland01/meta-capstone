import React from "react";
import img from "../../assets/restauranfood.jpg";

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
            {/* aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum */}
          </p>
          <div className="button" style={{ width: "150px" }}>
            <a href="index.html">Reserve a Table</a>
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

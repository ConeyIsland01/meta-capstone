import React from "react";
import img from "../../assets/adrian mario.png";

const About = () => {
  return (
    <div className="about">
      <section>
        <article>
          <h1>Little Lemon</h1>

          <h2>Chicago</h2>

          <p>
            Lorem ipsum aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
        </article>
      </section>

      <section>
        <img src={img} alt="Adrian and Mario" />
      </section>
    </div>
  );
};
export default About;

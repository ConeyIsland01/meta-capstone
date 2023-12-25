import React from "react";
import bru from "../../assets/bruchetta.svg";
import greek from "../../assets/greek salad.jpg";
import cake from "../../assets/lemon dessert.jpg";

const Specials = () => {
  return (
    <div className="specials">
      <div className="spec-header">
        <h1
          style={{ marginBottom: "30px", marginTop: "5px", fontSize: "35px" }}
        >
          This weeks specials!
        </h1>
        <div className="button">
          <a
            href="/"
            onClick={() => alert("This page is not required for this capstone")}
          >
            Online Menu
          </a>
        </div>
      </div>
      <div className="items">
        <section>
          <img src={greek} alt="Greek Salad" />
          <article>
            <div className="items2">
              <h3>Greek Salad</h3>
              <h3 style={{ color: "#ee9972" }}>$ 12.99</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <div className="items2">
              <h3>
                <a href="index.html">Order Delivery</a>
              </h3>
            </div>
          </article>
        </section>
        <section>
          <img src={bru} alt="Bruchetta" />
          <article>
            <div className="items2">
              <h3>Bruchetta</h3>
              <h3 style={{ color: "#ee9972" }}>$ 5.99</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <div className="items2">
              <h3>
                <a href="index.html">Order Delivery</a>
              </h3>
            </div>
          </article>
        </section>
        <section>
          <img src={cake} alt="Lemon Dessert" />
          <article>
            <div className="items2">
              <h3>Lemon Dessert</h3>
              <h3 style={{ color: "#ee9972" }}>$ 5.00</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <div className="items2">
              <h3>
                <a href="index.html">Order Delivery</a>
              </h3>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};
export default Specials;

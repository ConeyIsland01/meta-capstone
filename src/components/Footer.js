import React from "react";
import logo from "../logos/Asset 7@4x.png";
import face from "../assets/facebook.svg";
import insta from "../assets/inst.svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="items2">
          <img src={logo} alt="Little Lemon" />
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <a href="index.html">Menu</a>
            </li>
            <li>
              <a href="index.html">Reservations</a>
            </li>
            <li>
              <a href="index.html">Order Online</a>
            </li>
            <li>
              <a href="index.html">Login</a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h1>Contact</h1>
        <p>Address Random Rd 200, Chicago, IL, USA, 60622</p>
        <p>312-999-9999</p>
        <p>random@littlelemon.com</p>
        <p
          style={{
            marginTop: "80px",
            color: "#333",
            fontSize: "16px",
            fontFamily: "Karla",
          }}
        >
          ©️ 2023 Little Lemon. All Rights Reserved.
        </p>
      </section>
      <section>
        <h1>Social Media</h1>

        <div>
          <a href="index.html">
            <img
              src={face}
              style={{ height: "25px", width: "auto", marginRight: "20px" }}
              alt="facebook"
            />
          </a>
          <a href="index.html">
            <img
              src={insta}
              style={{ height: "25px", width: "auto", marginRight: "20px" }}
              alt="instagram"
            />
          </a>
        </div>
      </section>
    </footer>
  );
};
export default Footer;

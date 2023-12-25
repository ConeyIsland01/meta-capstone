import React from "react";
import logo from "../logos/Asset 7@4x.png";
import face from "../assets/facebook.svg";
import insta from "../assets/inst.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <section>
        <div className="items2">
          <img src={logo} alt="Little Lemon" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a
                href="/"
                onClick={() =>
                  alert("This page is not required for this capstone")
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={() =>
                  alert("This page is not required for this capstone")
                }
              >
                Menu
              </a>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <a
                href="/"
                onClick={() =>
                  alert("This page is not required for this capstone")
                }
              >
                Order Online
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={() =>
                  alert("This page is not required for this capstone")
                }
              >
                Login
              </a>
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
          <a href="facebook.com" target="_blank">
            <img
              src={face}
              style={{ height: "25px", width: "auto", marginRight: "20px" }}
              alt="facebook"
            />
          </a>
          <a href="instagram.com" target="_blank">
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

import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a
            href="/"
            onClick={() => alert("This page is not required for this capstone")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={() => alert("This page is not required for this capstone")}
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
            onClick={() => alert("This page is not required for this capstone")}
          >
            Order Online
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={() => alert("This page is not required for this capstone")}
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;

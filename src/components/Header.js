import React from "react";
import logo from "../logos/Asset 16@4x.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Little Lemon" />
      <Nav />
    </header>
  );
};
export default Header;

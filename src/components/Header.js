import React from "react";
import logo from "../logos/Asset 16@4x.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Little Lemon" />
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
};
export default Header;

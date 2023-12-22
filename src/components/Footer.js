import React from "react";
import logo from "../logos/Asset 7@4x.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} style={{ width: "50px" }} alt="Little Lemon" />
      </div>
      <div>
        <p>©️ 2023 Little Lemon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;

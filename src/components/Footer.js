import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  return (
    <center>
      <div className="footer">
        <h1 className="flower-heading">Flower Shop</h1>
        <a href="/">Home Page</a> || <a href="/gallery"> Gallery</a> ||{" "}
        <a href="/bouquets"> Bouquets</a> <br /> <br />
        <input type="text" placeholder="Enter Email" className="text" />
        <button>Subscribe</button>
      </div>
      <br />
    </center>
  );
};

export default Footer;

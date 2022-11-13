import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (Window.scrolly >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Flower</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/Bouquets">Bouquets</Link>
        </li>
        <li>
          <Link to="/Pricing">Pricing</Link>
        </li>

        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>

      <div className="humburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "rgb(128, 74, 74)" }} />
        ) : (
          <FaBars size={20} style={{ color: "rgb(128, 74, 74)" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;

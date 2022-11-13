import "./FlowerStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const Flower = () => {
  return (
    <div className="flower">
      <div className="flower2">
        <img
          className="flower-img"
          src="https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJvc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="image"
        />
      </div>
      <div className="heading">
        <h1>Flowers</h1>
        <p>Natural and Beautiful Flowers </p>
        <br />
        <div>
          <Link to="/pricing" className="btn">
            {" "}
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Flower;

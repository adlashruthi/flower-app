import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Flower2 from "../components/Flower2";
import Price from "../components/Price";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Flower2 heading="Pricing" />
      <Price />
      <Footer />
    </div>
  );
};

export default Pricing;

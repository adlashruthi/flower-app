import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Flower2 from "../components/Flower2";
import Bouquets1 from "../components/Bouquets1";
const Bouquets = () => {
  return (
    <div>
      <Navbar />
      <Flower2 heading="Bouquets" />
      <Bouquets1 />
      <Footer />
    </div>
  );
};

export default Bouquets;

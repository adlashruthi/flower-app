import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Flower2 from "../components/Flower2";
import AboutUs from "../components/AboutUs";
const About = () => {
  return (
    <div>
      <Navbar />
      <Flower2 heading="About" />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;

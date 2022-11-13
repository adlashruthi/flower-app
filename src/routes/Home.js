import React from "react";
import Navbar from "../components/Navbar";
import Flower from "../components/Flower";
import AboutUs from "../components/AboutUs";
import Gallery1 from "../components/Gallery1";
import Bouquets1 from "../components/Bouquets1";
import Price from "../components/Price";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Flower />
      <AboutUs />
      <Gallery1 />
      <Bouquets1 />
      <Price />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;

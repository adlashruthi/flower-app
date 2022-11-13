import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Flower2 from "../components/Flower2";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Flower2 heading="Contact" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;

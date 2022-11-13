import "./ContactFormStyles.css";
import React from "react";
const ContactForm = () => {
  return (
    <>
      <div className="contact-form">
        <h1>CONTACT US!!</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Phone Number" />
          <input placeholder="Subject" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button>Send Email</button>
        </form>
      </div>
    </>
  );
};
export default ContactForm;

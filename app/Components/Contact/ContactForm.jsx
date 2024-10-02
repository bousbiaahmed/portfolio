"use client";
import React, { useRef } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const formRef = useRef(null); // Référence pour le formulaire

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "05db89b1-5bf0-4292-a97a-dd87c5fc318d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        formRef.current.reset(); // Efface les champs du formulaire
      } else {
        console.error("Submission failed", res);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="contact">
      <form ref={formRef} onSubmit={onSubmit} className="contact-form">
        <h2>Contact Me</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;

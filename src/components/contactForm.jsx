import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const validate = () => {
    let isValid = true;
    for (let i = 0; i < form.current.length; i++) {
      if (form.current[i].value === "") {
        isValid = false;
      }
    }
    return isValid;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    const message = form.current.message.value;
    if (message.trim() === "") {
        window.alert("Please enter a message before sending.");
        return;
    }

    emailjs.sendForm('service_qbj4unq', 'template_vezot1b', form.current, 'xgBoWmRDZS5sxSEON')
      .then((result) => {
          console.log(result.text);
          window.alert("Your message has been sent! Thank you for reaching out!")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="contactForm" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className="form-item" type="text" name="user_name" />
      <label>Email</label>
      <input className="form-item" type="email" name="user_email" />
      <label>Message</label>
      <textarea className="form-item" name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
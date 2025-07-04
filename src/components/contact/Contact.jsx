import './contact.css';

import React from 'react';

import { MdOutlineEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div
        className="container contact__container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          className="contact__options"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <article
            className="contact__option"
            style={{ textAlign: 'center' }}
          >
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vandandalvi@gmail.com</h5>
            <a href="mailto:vandandalvi@gmail.com">Send a message</a>
          </article>
        </div>
        {/* Contact form removed as requested */}
      </div>
    </section>
  );
};

export default Contact;

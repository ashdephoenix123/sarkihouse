import React from "react";

const Contact = () => {

  return <>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14251.673307850237!2d88.41195218730131!3d26.74698228118657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e440ddfe805603%3A0xb14da0f1451ed89f!2sChampasari%2C%20Siliguri%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1677668737511!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
    <h2 className="page__heading">Contact Me</h2>

    <div className="container">
      <form action="https://formspree.io/f/mrgvkqry" className="contact__form" method="POST">
        <input className="contact__form-fields field-1" type="text" placeholder="Name" name="name" />
        <input className="contact__form-fields field-2" type="email" placeholder="Email" name="email" />
        <textarea className="contact__form-fields field-3" name="message" placeholder="Message" cols="30" rows="8"></textarea>
        <button className="btn">Send</button>
      </form>
    </div>
  </>;
};

export default Contact;

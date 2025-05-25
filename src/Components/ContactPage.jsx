// src/ContactPage.jsx
import React, { useState } from 'react';
import './styles.css'; // Ensure your CSS file matches
import schoolimage from './schoolimage.avif'; // Replace with the actual path to the school image

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      form.reportValidity();
      return;
    }

    setFormStatus('Thank you for reaching out! We will get back to you soon.');
    setShowStatus(true);
    form.reset();

    setTimeout(() => {
      setShowStatus(false);
      setFormStatus('');
    }, 7000);
  };

  return (
    <div>
      <main className="container">
<section id="contact-info" aria-labelledby="contact-info-title">
  <h3 id="contact-info-title">Contact Information</h3>

  <address style={{ fontStyle: 'normal', fontWeight: 600, lineHeight: 1.6, marginBottom: '1.5rem' }}>
    <p><strong>Address:</strong> VF64+H2C, Fattepur, Hirapur, Maharashtra 431007</p>
    <p><strong>Phone:</strong> +91 74170 72553</p>
    <p><strong>Email:</strong> <a href="mailto:sunrisepublicschool@gmail.com">sunrisepublicschool@gmail.com</a></p>
    <p><strong>Website:</strong> <a href="http://www.sunrisepublicschool.edu" target="_blank" rel="noopener noreferrer">www.sunrisepublicschool.edu</a></p>
  </address>

  {/* School Image */}
  <img
    src={schoolimage}
    alt="School contact"
    style={{ width: '100%', borderRadius: '12px', marginBottom: '1.5rem' }}
  />

  {/* Google Map Embed */}
  <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative', paddingBottom: '56.25%', height: 0 }}>
  <iframe
    title="School Location"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d424.4763576751531!2d75.45488754649655!3d19.861387609567693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba5168729ef37%3A0xc9466feef9a67a02!2sSunrise%20Public%20School!5e1!3m2!1sen!2sin!4v1748182069641!5m2!1sen!2sin"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 0
    }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
</section>


        <section id="contact-form-section" aria-labelledby="contact-form-title">
          <h3 id="contact-form-title">Contact Form</h3>
          <form id="contact-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="contact-name">Name:</label>
            <input type="text" id="contact-name" name="name" required />

            <label htmlFor="contact-email">Email:</label>
            <input type="email" id="contact-email" name="email" required />

            <label htmlFor="contact-message">Message:</label>
            <textarea id="contact-message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>

            {showStatus && (
              <p
                id="contact-status"
                role="alert"
                aria-live="polite"
                style={{
                  color: '#27ae60',
                  fontWeight: 600,
                  marginTop: '0.5rem'
                }}
              >
                {formStatus}
              </p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
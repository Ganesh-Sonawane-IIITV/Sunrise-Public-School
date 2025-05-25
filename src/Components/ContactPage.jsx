// src/ContactPage.jsx
import React, { useState } from 'react';
import './styles.css'; // Ensure your CSS file matches

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
            <p><strong>Address:</strong> 123 Sunshine Avenue, Happy Town, Country</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Email:</strong> <a href="mailto:info@sunrisepublicschool.edu">info@sunrisepublicschool.edu</a></p>
            <p><strong>Website:</strong> <a href="http://www.sunrisepublicschool.edu" target="_blank" rel="noopener noreferrer">www.sunrisepublicschool.edu</a></p>
          </address>
          <img
            src="https://images.unsplash.com/photo-1573496771706-2fe783a396d8?auto=format&fit=crop&w=900&q=80"
            alt="School contact"
            style={{ width: '100%', borderRadius: '12px', marginBottom: '1.5rem' }}
          />
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

      <footer>
        &copy; 2024 Sunrise Public School. All rights reserved.
      </footer>
    </div>
  );
};

export default ContactPage;

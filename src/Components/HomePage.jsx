// src/HomePage.jsx
import React, { useState, useEffect } from 'react';
import './styles.css';
import display1 from './display1.webp';
import display2 from './display2.webp';
import display3 from './display3.webp';
//import display4 from './display4.webp';
import display5 from './display5.webp';
import display6 from './display6.webp';
import display7 from './display7.webp';
import Welcome from './welcome.jpg';

const imageDimensions = {
  0: { height: "60%", width: "auto" },
  1: { height: "60%", width: "auto" },
  2: { height: "60%", width: "auto" },
  // Add more entries as needed
  3: { height: "60%", width: "auto" },
  4: { height: "60%", width: "auto" },
  5: { height: "60%", width: "auto" },
  6: { height: "60%", width: "auto" }
};


const carouselImages = [
    display1,
  display2,
  display3,
  display5,
  display6
];

const navBtnStyle = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: '20px',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0,0,0,0.4)',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  fontSize: '2rem',
  cursor: 'pointer',
  zIndex: 1,
  padding: '0.4rem 0.7rem',
});

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formStatus, setFormStatus] = useState('');
  const [formError, setFormError] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});
  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setFormStatus('Please fill in all required fields.');
      setFormError(true);
      return;
    }

    // Simulated successful form submission
    setFormStatus("Thank you for your enquiry. We'll get back to you soon!");
    setFormError(false);
    form.reset();
  };

  const toggleFAQ = (id) => {
    setFaqOpen((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

return (
  <>
<div>
  {/* IMAGE SLIDER SECTION WITH BLURRED BACKGROUND */}
  <div style={{ position: "relative", overflow: "hidden", height: "500px" }}>
    {/* Blurred background image */}
    <img
      src={carouselImages[currentImageIndex]}
      alt="Blurred background"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "blur(15px)",
        transform: "scale(1.1)",
        zIndex: 0,
      }}
    />
    
    {/* Foreground image */}
    <div
      style={{
        position: "relative",
        zIndex: 1,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={carouselImages[currentImageIndex]}
        alt="Foreground display"
        style={{
          ...imageDimensions[currentImageIndex] || { height: "100%", width: "auto" },
          objectFit: "contain",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        }}
      />
    </div>

    {/* Navigation buttons */}
    <button onClick={goToPrevious} style={navBtnStyle("left")}>‹</button>
    <button onClick={goToNext} style={navBtnStyle("right")}>›</button>
  </div>
</div>
      <main className="container">
        {/* HERO SECTION */}
<section
  id="home"
  className="hero"
  tabIndex="-1"
  aria-label="Welcome to Sunrise Public School"
  style={{
    backgroundImage: `url(${Welcome})`,
    backgroundSize: "contain",      // or "cover", or "100% 300px"
    backgroundRepeat: "no-repeat",  // prevent tiling
    backgroundPosition: "center",   // center the image
    height: "400px",                // set desired height
  }}
>

          <h2>Welcome to Sunrise Public School</h2>
          <p>Where every child is nurtured to shine bright!</p>
          <div className="tagline">Inspire. Learn. Grow.</div>
        </section>

        {/* KEY HIGHLIGHTS SECTION */}
        <section id="key-highlights" aria-labelledby="key-highlights-title">
          <h3 id="key-highlights-title">Key Highlights</h3>
          <ul>
            <li>Experienced and passionate faculty</li>
            <li>Innovative and balanced curriculum</li>
            <li>State-of-the-art science and sports facilities</li>
            <li>Rich extracurricular and cultural activities</li>
            <li>Community engagement and social responsibility</li>
          </ul>
          <img
            src={display7}
            alt="Students presenting in classroom"
            style={{ width: "100%", marginTop: "1rem", borderRadius: "10px" }}
          />
        </section>

        {/* ENQUIRY FORM SECTION */}
        <section id="enquiry" aria-labelledby="enquiry-title">
          <h3 id="enquiry-title">Enquiry Form</h3>
          <form id="enquiry-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="enquiry-name">Name:</label>
            <input type="text" id="enquiry-name" name="name" required />

            <label htmlFor="enquiry-email">Email:</label>
            <input type="email" id="enquiry-email" name="email" required />

            <label htmlFor="enquiry-message">Message:</label>
            <textarea id="enquiry-message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
            {formStatus && (
              <p
                id="form-status"
                role="alert"
                aria-live="polite"
                style={{
                  color: formError ? "red" : "#27ae60",
                  fontWeight: 600,
                  marginTop: "0.5rem",
                }}
              >
                {formStatus}
              </p>
            )}
          </form>
        </section>

        {/* FAQ SECTION */}
        <section id="faqs" aria-labelledby="faqs-title">
          <h3 id="faqs-title">Frequently Asked Questions</h3>
          {[
            {
              id: "faq1",
              question: "What is the admission process?",
              answer:
                "The admission process includes filling out an application form, submitting required documents, and attending an interview.",
            },
            {
              id: "faq2",
              question: "What extracurricular activities are offered?",
              answer:
                "We offer a variety of extracurricular activities including sports, music, arts, and community service programs.",
            },
            {
              id: "faq3",
              question: "How can I contact the school?",
              answer:
                "You can contact us via the contact form or by calling our office at +1 (555) 123-4567.",
            },
          ].map(({ id, question, answer }) => (
            <div key={id} className="faq-item">
              <button
                className="faq-question"
                aria-expanded={faqOpen[id] ? "true" : "false"}
                aria-controls={`${id}-answer`}
                id={`${id}-btn`}
                onClick={() => toggleFAQ(id)}
              >
                {question}
                <span className="arrow" aria-hidden="true">
                  {faqOpen[id] ? "−" : "+"}
                </span>
              </button>
              <div
                id={`${id}-answer`}
                className="faq-answer"
                role="region"
                aria-labelledby={`${id}-btn`}
                hidden={!faqOpen[id]}
              >
                {answer}
              </div>
            </div>
          ))}
        </section>
      </main>
  </>
);

};

export default HomePage;

// src/AboutPage.jsx
import React from 'react';
import './styles.css'; // Adjust path based on your project structure
import chairmen from './chairmen.avif'; // Replace with the actual path to the chairman's photo

const AboutPage = () => {
  return (
    <div>
      <main className="container">
        <section id="about-us" aria-labelledby="about-us-title">
          <h3 id="about-us-title">About Us</h3>
          <p>
            Sunrise Public School is committed to providing a holistic education that nurtures the mind, body, and spirit of every student.
            Our dedicated faculty and innovative curriculum ensure that students are well-prepared for the challenges of the future.
          </p>
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
            alt="School building"
            style={{ width: '100%', borderRadius: '12px', marginTop: '1rem' }}
          />
        </section>

<section id="chairman-message" aria-labelledby="chairman-message-title">
  <h3 id="chairman-message-title">Chairman's Message</h3>

  <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
    <img
      src={chairmen} // 🔁 Replace with actual image URL
      alt="Chairman of Sunrise Public School"
      style={{
        width: "180px",
        height: "180px",
        objectFit: "cover",
        borderRadius: "50%",
        boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        marginBottom: "1rem"
      }}
    />
    <div>
      <strong style={{ fontSize: "1.2rem" }}>Mr. Rajeev Mehra</strong><br />
      <span style={{ fontStyle: "italic", color: "#555" }}>Chairman</span>
    </div>
  </div>

  <p style={{ textAlign: "justify" }}>
    Welcome to Sunrise Public School! Our vision is to create a nurturing environment where students can thrive academically and personally.
    We believe in empowering our students to become responsible citizens and lifelong learners.
  </p>
</section>



        <section id="sunrise-initiative" aria-labelledby="sunrise-initiative-title">
          <h3 id="sunrise-initiative-title">Sunrise Initiative</h3>
          <p>
            The Sunrise Initiative focuses on community engagement and social responsibility,
            encouraging students to participate in various outreach programs and projects that benefit society.
          </p>
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80"
            alt="Students volunteering"
            style={{ width: '100%', borderRadius: '12px', marginTop: '1rem' }}
          />
        </section>

        <section id="news" aria-labelledby="news-title">
          <h3 id="news-title">News</h3>
          <p>
            Stay updated with the latest happenings at Sunrise Public School. Check our news section for announcements, events, and achievements.
          </p>
        </section>

        <section id="awards" aria-labelledby="awards-title">
          <h3 id="awards-title">Awards</h3>
          <p>
            We take pride in our students' achievements. Our school has received numerous awards for academic excellence, sports, and community service.
          </p>
        </section>

<section id="principal-message" aria-labelledby="principal-message-title">
  <h3 id="principal-message-title">Principal's Message</h3>

  <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
    <img
      src={chairmen} // 🔁 Replace with actual image URL
      alt="Principal of Sunrise Public School"
      style={{
        width: "180px",
        height: "180px",
        objectFit: "cover",
        borderRadius: "50%",
        boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        marginBottom: "1rem"
      }}
    />
    <div>
      <strong style={{ fontSize: "1.2rem" }}>Mr. Bhujbal</strong><br />
      <span style={{ fontStyle: "italic", color: "#555" }}>Principal</span>
    </div>
  </div>

  <p style={{ textAlign: "justify" }}>
    As the principal of Sunrise Public School, I am proud of our commitment to excellence in education.
    We strive to create a supportive and challenging environment for our students.
  </p>
</section>



        <section id="social-outreach" aria-labelledby="social-outreach-title">
          <h3 id="social-outreach-title">Social Outreach</h3>
          <p>
            Our social outreach programs aim to instill a sense of responsibility and empathy in our students,
            encouraging them to give back to the community.
          </p>
        </section>

        <section id="school-brochure" aria-labelledby="school-brochure-title">
          <h3 id="school-brochure-title">School Brochure</h3>
          <p>
            Download our school brochure to learn more about our programs, facilities, and admission process.
          </p>
          <a href="brochure.pdf" download>Download Brochure</a>
        </section>

        <section id="careers" aria-labelledby="careers-title">
          <h3 id="careers-title">Careers</h3>
          <p>
            Join our dedicated team of educators! We are always looking for passionate individuals to contribute to our mission of providing quality education.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;

// src/AdmissionsPage.jsx
import React from 'react';
import './styles.css'; // Assuming your CSS is in styles.css

const AdmissionsPage = () => {
  return (
    <div>
      <main className="container">
        <section id="admission-process" aria-labelledby="admission-process-title">
          <h3 id="admission-process-title">Admission Process</h3>
          <p>
            The admission process at Sunrise Public School is designed to be straightforward and transparent.
            Interested parents can fill out an application form, submit necessary documents, and schedule an interview.
          </p>
        </section>

        <section id="online-admission" aria-labelledby="online-admission-title">
          <h3 id="online-admission-title">Online Admission</h3>
          <p>
            We offer an easy online admission system. Please fill out the online application form on our website and upload
            required documents to complete your child's enrollment.
          </p>
          <img
            src="https://images.unsplash.com/photo-1556742502-ec7c0e9f43da?auto=format&fit=crop&w=900&q=80"
            alt="Online admission"
            style={{ width: '100%', borderRadius: '12px', marginTop: '1rem' }}
          />
        </section>

        <section id="fee-structure" aria-labelledby="fee-structure-title">
          <h3 id="fee-structure-title">Fee Structure</h3>
          <p>
            Our fee structure is competitive and includes tuition, extracurricular fees, and other applicable charges.
            For detailed information, please contact the admissions office.
          </p>
        </section>
      </main>

      <footer>
        &copy; 2024 Sunrise Public School. All rights reserved.
      </footer>
    </div>
  );
};

export default AdmissionsPage;

// src/AdmissionsPage.jsx
import React from 'react';
import './styles.css'; // Assuming your CSS is in styles.css
import feestructure from './feestructure.jpg'; // Replace with the actual path to the fee structure image
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
    We offer an easy online admission system. Please fill out the application form below and upload the required documents to complete your child's enrollment.
  </p>

  <form
    style={{
      marginTop: '1.5rem',
      padding: '1rem',
      borderRadius: '12px',
      backgroundColor: '#f7f9fc',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}
    onSubmit={(e) => {
      e.preventDefault();
      alert("Form submitted!");
    }}
  >
    {/* Student Information */}
    <fieldset style={{ marginBottom: '1.5rem' }}>
      <legend><strong>Student Information</strong></legend>

      <label>Full Name:<br />
        <input type="text" name="studentName" required style={{ width: '100%' }} />
      </label><br /><br />

      <label>Date of Birth:<br />
        <input type="date" name="dob" required style={{ width: '100%' }} />
      </label><br /><br />

      <label>Class Seeking Admission To:<br />
        <select name="class" required style={{ width: '100%' }}>
          <option value="">-- Select Class --</option>
          <option value="Nursery">Nursery</option>
          <option value="KG">KG</option>
          <option value="1">Class 1</option>
          <option value="2">Class 2</option>
          <option value="3">Class 3</option>
          <option value="4">Class 4</option>
          <option value="5">Class 5</option>
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
        </select>
      </label><br /><br />

      <label>Gender:<br />
        <select name="gender" required style={{ width: '100%' }}>
          <option value="">-- Select Gender --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>
    </fieldset>

    {/* Guardian Information */}
    <fieldset style={{ marginBottom: '1.5rem' }}>
      <legend><strong>Guardian Information</strong></legend>

      <label>Guardian's Full Name:<br />
        <input type="text" name="guardianName" required style={{ width: '100%' }} />
      </label><br /><br />

      <label>Relation to Student:<br />
        <input type="text" name="relation" required style={{ width: '100%' }} />
      </label><br /><br />

      <label>Phone Number:<br />
        <input type="tel" name="phone" required style={{ width: '100%' }} />
      </label><br /><br />

      <label>Email Address:<br />
        <input type="email" name="email" style={{ width: '100%' }} />
      </label><br /><br />

      <label>Address:<br />
        <textarea name="address" rows="3" required style={{ width: '100%' }}></textarea>
      </label>
    </fieldset>

    {/* Document Uploads */}
    <fieldset style={{ marginBottom: '1.5rem' }}>
      <legend><strong>Upload Required Documents</strong></legend>

      <label>Aadhar Card (PDF/JPG):<br />
        <input type="file" name="aadhar" accept=".pdf,.jpg,.jpeg,.png" required />
      </label><br /><br />

      <label>Transfer Certificate (if from another school):<br />
        <input type="file" name="tc" accept=".pdf,.jpg,.jpeg,.png" />
      </label><br /><br />

      <label>Previous Gradesheet:<br />
        <input type="file" name="gradesheet" accept=".pdf,.jpg,.jpeg,.png" />
      </label><br /><br />

      <label>Date of Birth Proof:<br />
        <input type="file" name="dobProof" accept=".pdf,.jpg,.jpeg,.png" required />
      </label>
    </fieldset>

    <button
      type="submit"
      style={{
        backgroundColor: '#2980b9',
        color: 'white',
        padding: '0.75rem 1.5rem',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}
    >
      Submit Application
    </button>
  </form>

</section>


        <section id="fee-structure" aria-labelledby="fee-structure-title">
          <h3 id="fee-structure-title">Fee Structure</h3>
          <p>
            Our fee structure is competitive and includes tuition, extracurricular fees, and other applicable charges.
            For detailed information, please contact the admissions office.
          </p>
            <img
    src={feestructure} // Replace with the actual path to the fee structure image
    alt="Online admission"
    style={{ width: '100%', borderRadius: '12px', marginTop: '2rem' }}
  />
        </section>
      </main>
    </div>
  );
};

export default AdmissionsPage;

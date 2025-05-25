import React from "react";
import display1 from "./display1.webp";
import display2 from "./display2.webp";
import display3 from "./display3.webp";
import display4 from "./display4.webp";
import display5 from "./display5.webp";
import display6 from "./display6.webp";
import display7 from "./display7.webp";
import display8 from "./display8.webp"; // Assuming you have an 8th display image
import display9 from "./display9.webp"; // Assuming you have a 9th display image
import display10 from "./display10.webp"; // Assuming you have a 10th display image
import display11 from "./display11.webp"; // Assuming you have an 11th display image
import display12 from "./display12.webp"; // Assuming you have a 12th display image
import display13 from "./display13.webp"; // Assuming you have a 13th display image
import display14 from "./display14.webp"; // Assuming you have a 14th display image
import display15 from "./display15.webp"; // Assuming you have a 15th display image
import display16 from "./display16.webp"; // Assuming you have a 16th display image
import display17 from "./display17.webp"; // Assuming you have a 17th display image
import display18 from "./display18.webp"; // Assuming you have an 18th display image
import display19 from "./display19.webp"; // Assuming you have a 19th display image
import schoollogo from "./School-logo.png"; // Replace with your actual logo path
import schoolimage from "./schoolimage.avif"; // Replace with your actual school image path
import Faculties from "./Faculties.webp"; // Assuming you have a separate component for faculties

const galleryImages = [
  display1,
  display2,
  display3,
  display4,
  display5,
  display6,
  display7,
  display8,
  display9,
  display10,
  display11,
  display12,
  display13,
  display14,
  display15,
  display16,
  display17,
  display18,
  display19,
  schoollogo,
  schoolimage,
  Faculties
];




const facultyData = [
  {
    name: "Dr. Anjali Sharma",
    qualification: "Ph.D. in Education",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mr. Rajeev Kumar",
    qualification: "M.Sc. in Mathematics",
    photo: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Ms. Pooja Sinha",
    qualification: "M.A. in English Literature",
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  // Add more as needed
];

const WhySunrise = () => {
  return (
    <main className="container">
      <section id="curriculum" aria-labelledby="curriculum-title">
        <h3 id="curriculum-title">The Right Curriculum</h3>
        <p>
          Our curriculum is designed to foster critical thinking, creativity, and a love for learning. We offer a balanced approach that includes academics, arts, and physical education.
        </p>
        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
          alt="Students studying with books"
          style={{ width: "100%", borderRadius: "12px", marginTop: "1rem" }}
        />
      </section>

<section id="faculty" aria-labelledby="faculty-title">
  <h3 id="faculty-title">The Right Faculty</h3>
  <p>
    Our faculty consists of highly qualified and experienced educators who are dedicated to nurturing each student's potential and providing personalized attention.
  </p>

  <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    marginTop: "1.5rem",
    justifyContent: "center"
  }}>
    {/* Example Card */}
    {facultyData.map((faculty, index) => (
      <div key={index} style={{
        width: "240px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        textAlign: "center",
        padding: "1rem"
      }}>
        <img
          src={faculty.photo}
          alt={faculty.name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
        <h4 style={{ margin: "0.75rem 0 0.25rem", fontSize: "1.1rem" }}>{faculty.name}</h4>
        <p style={{ fontSize: "0.95rem", color: "#555" }}>{faculty.qualification}</p>
      </div>
    ))}
  </div>
</section>


<section id="environment" aria-labelledby="environment-title">
  <h3 id="environment-title">The Right Environment</h3>

  <img
    src={display1}
    alt="Students in a learning environment"
    style={{
      width: "100%",
      maxHeight: "400px",
      objectFit: "cover",
      borderRadius: "12px",
      marginBottom: "1rem"
    }}
  />

  <p>
    We provide a safe and inclusive environment that encourages students to express themselves and develop their unique talents.
  </p>
</section>


      <section id="approach" aria-labelledby="approach-title">
        <h3 id="approach-title">The Right Approach</h3>
        <p>
          Our teaching approach emphasizes hands-on learning, collaboration, and real-world applications to prepare students for future challenges.
        </p>
      </section>

      <section id="skills" aria-labelledby="skills-title">
        <h3 id="skills-title">The Right Skills</h3>
        <p>
          We focus on developing essential skills such as communication, teamwork, and problem-solving to equip students for success in their future endeavors.
        </p>
      </section>

<section id="gallery" aria-labelledby="gallery-title" style={{ marginTop: "3rem" }}>
  <h3 id="gallery-title">Our Gallery</h3>
  <p>Explore moments from school events, classroom activities, and student achievements.</p>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    marginTop: "1.5rem"
  }}>
    {galleryImages.map((img, idx) => (
      <img
        key={idx}
        src={`${img}?auto=format&fit=crop&w=800&q=80`}
        alt={`Gallery image ${idx + 1}`}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      />
    ))}
  </div>
</section>




    </main>
  );
};

export default WhySunrise;

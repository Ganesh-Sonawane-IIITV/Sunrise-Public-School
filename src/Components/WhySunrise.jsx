import React from "react";

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
      </section>

      <section id="environment" aria-labelledby="environment-title">
        <h3 id="environment-title">The Right Environment</h3>
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
    </main>
  );
};

export default WhySunrise;

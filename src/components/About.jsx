function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>

      <div className="card fade-up">
        <p className="about-text">
           Software Engineering graduate with practical experience in front-end development, UX design, and software testing. Skilled in system analysis, UI development, and quality testing using Katalon Studio. Passionate about continuous learning, problem-solving, and contributing to innovative projects in collaborative environments.
        </p>

        <hr className="divider" />

        <h3 className="card-title">
          🎓 Bachelor’s Degree in Software Engineering
        </h3>

        <p className="edu-university">
          Prince Sattam bin Abdulaziz University – Al-Kharj
        </p>

        <p className="edu-date">2019 – 2023</p>

        <ul className="edu-list">
          <li>GPA: 4.81 / 5</li>
          <li>Graduation Project:Indoor navigation application for university</li>
          <li>Strong foundation in system analysis & software engineering</li>
        </ul>
      </div>
    </section>
  );
}

export default About;

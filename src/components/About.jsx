function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>

      <div className="card fade-up">
        <p className="about-text">
          Software Engineering graduate with a strong passion for front-end
          development, user experience design, and building clean, user-friendly
          interfaces. I have hands-on academic experience in system analysis,
          UI development, database design, and software testing through multiple
          university projects and a graduation project focused on ERP systems.
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
          <li>Graduation Project: University ERP System</li>
          <li>Strong foundation in system analysis & software engineering</li>
        </ul>
      </div>
    </section>
  );
}

export default About;

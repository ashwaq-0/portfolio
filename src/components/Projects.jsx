import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const projects = [
    {
      title: "Riyadh Metro Ticket Booking System",
      description:
        "Requirements analysis project including UML diagrams, system scope definition, UI prototype, and validation through test cases.",
      tech: ["UML", "System Analysis", "Requirements"],
      file: "Riyadh Metro Ticket Booking System.pdf",
    },
    {
      title: "Online Used Books Platform",
      description:
        "Web-based platform for buying and selling used books. Improved search functionality and extended book attributes through perfective maintenance.",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      file: "online used books platform.pdf",
    },
    {
      title: "Adding the configuration management module to the system ",
      description:
        "Java-based module demonstrating the implementation of Singleton and MVC design patterns within a graphical user interface (GUI). The project includes requirements analysis, system design, and detailed specifications for getter and setter methods, along with a hand-drawn user interface prototype and implementation screenshots. The system was developed in a structured development environment and validated through unit testing with documented test results.",
      tech: ["Java", "MVC", "Singleton", "JUnit"],
      file: "Configuration management.pdf",
    },
    {
      title: "Indoor navigation application for university (Graduation Project)",
      description:
        "Web application designed to improve accessibility to student services within the Faculty of Engineering and Computer Science at Prince Sattam University. The system includes indoor navigation, a faculty office directory, office hours information, academic and exam schedules. The project simulates a real-world university service management system and focuses on system analysis, database modeling, UI/UX design, and software testing.",
      tech: ["JavaScript", "PHP", "HTML","CSS","MySQL", "Katalon"],
      file: "Graduation Project.pdf",
    },
  ];

  const getPreviewUrl = (file) => {
    const fileUrl = `${window.location.origin}/Projects/${file}`;
    return fileUrl;
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className={`project-card ${
              activeCard === index ? "active-card" : ""
            }`}
            key={index}
            onClick={() => setActiveCard(index)}
          >
            <div>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tech.map((t, i) => (
                  <span className="tag" key={i}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              className="view-btn"
              onClick={(e) => {
                e.stopPropagation();
                setOpenProject(project.file);
                setActiveCard(index);
              }}
            >
              View Project
            </button>
          </div>
        ))}
      </div>

      {openProject && (
        <div
          className="cert-modal"
          onClick={() => {
            setOpenProject(null);
            setActiveCard(null);
          }}
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => {
                setOpenProject(null);
                setActiveCard(null);
              }}
            >
              ✕
            </button>

            <iframe
              src={getPreviewUrl(openProject)}
              title="Project Preview"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
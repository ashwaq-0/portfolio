import "./Certificates.css";
import { useState } from "react";

function Certificates() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openCert, setOpenCert] = useState(null);

  const certificates = [
    { title: "UX Design Fundamentals", category: "UI/UX", file: "UX Design Fundamentals.pdf" },
    { title: "Visual Elements of User Interface Design", category: "UI/UX", file: "Visual Elements of User Interface Design.pdf" },
    { title: "UIUX Design with Figma (High-Fidelity Prototypes)", category: "UI/UX", file: "UIUX Design with Figma (High-Fidelity Prototypes).pdf" },
    { title: "Web Design Strategy & Information Architecture", category: "UI/UX", file: "Web Design Strategy & Information Architecture.pdf" },
    { title: "Web Design Wireframes to Prototypes", category: "UI/UX", file: "Web Design Wireframes to Prototypes.pdf" },
    { title: "Web Development", category: "Frontend", file: "Web Development.pdf" },
    { title: "Build Dynamic User Interfaces (UI) for Websites", category: "Frontend", file: "Build Dynamic User Interfaces.pdf" },
    { title: "Interactivity with JavaScript", category: "Frontend", file: "Interactivity with JavaScript.pdf" },
    { title: "API Testing: Real Web Applications via Postman", category: "QA", file: "API Testing Real Web Applications via Postman.pdf" },
    { title: "Software Engineering Implementation and Testing", category: "QA", file: "Software Engineering Implementation and Testing.pdf" },
    { title: "Spreadsheet Software (Microsoft Excel)", category: "Data", file: "Spreadsheet Software (Microsoft Excel).pdf" },
    { title: "Data Calculations in Microsoft Excel", category: "Data", file: "Data Calculations in Microsoft Excel.pdf" },
  ];

  const filters = ["All", "UI/UX", "Frontend", "QA", "Data"];

  const filteredCertificates =
    activeFilter === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  return (
    <section id="certificates" className="section">
      <h2 className="section-title">Certifications</h2>

      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="cert-grid">
        {filteredCertificates.map((cert, index) => (
          <div className="card fade-up" key={index}>
            <span className="cert-category">{cert.category}</span>
            <p className="cert-title">{cert.title}</p>

            <button
              className="view-btn"
              onClick={() => setOpenCert(cert.file)}
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {openCert && (
        <div className="cert-modal" onClick={() => setOpenCert(null)}>
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setOpenCert(null)}
            >
              ✕
            </button>

            <iframe
              src={`/certificates/${openCert}`}
              title="Certificate Preview"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
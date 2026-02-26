import { useState } from "react";
import "./Header.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        {/* زر القائمة */}
        <button
          onClick={toggleMenu}
          style={{
            position: "fixed",
            top: "16px",
            right: "24px",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "34px",
            cursor: "pointer",
            zIndex: 1000
          }}
        >
          ☰
        </button>

        {/* الاسم */}
        <h1 className="header-name">Ashwaq Rajeh Alotaibi</h1>

<button
  className="view-btn"
  onClick={() => window.open("/cv.pdf", "_blank")}
>
  View CV
</button>


        {/* روابط التواصل */}
        <div className="header-links">
          <a href="tel:0547304968" aria-label="Phone">
            <FaPhone />
          </a>

          <a href="mailto:ashwaqr777@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/Ashwaq-1"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/AshwaqR"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </header>

      {/* القائمة الجانبية */}
      <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a>
      </nav>
    </>
  );
}

export default Header;

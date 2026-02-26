import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";


function App() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Skills />
        <Experience/>
        <Projects />
        <Certificates />
    
      </main>
    </>
  );
}

export default App;

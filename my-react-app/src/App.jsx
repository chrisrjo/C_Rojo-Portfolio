import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import GhostFibers from './components/GhostFibers';
import './styles.css';

export default function App() {
  return (
    <>
      <GhostFibers
        glowColor="#7aa2ff"
        speed={0.18}
        scale={1.8}
        rotationSpeed={0.2}
        layers={4}
        twist={0.12}
        threads={1}
        glow={2.3}
        brightness={1.1}
        vignette={0.86}
        mouseInteraction={true}
        intro={true}
      />

      <main className="portfolio-shell">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </main>
    </>
  );
}


import javascript from "../assets/javascript.png";
import css from "../assets/css.jpg";
import react from "../assets/react.png";
import html from "../assets/html.png";
import figmaa from "../assets/figmaa.png";
export default function Skills() {
  return (
    <>
      <section id="skills" className="skills">
        <h1>Skills</h1>
        <div className="skills-container">
          <div className="skills-item">
            <img src={javascript} alt="Javascript" />
            <span>Javascript</span>
          </div>
          <div className="skills-item">
            <img src={react} alt="React" />
            <span>React</span>
          </div>
          <div className="skills-item">
            <img src={figmaa} alt="Figma" />
            <span>Figma</span>
          </div>
          <div className="skills-item">
            <img src={html} alt="HTML" />
            <span>HTML</span>
          </div>
          <div className="skills-item">
            <img src={css} alt="CSS" />
            <span>CSS</span>
          </div>
        </div>
      </section>
      <hr className="solid" />
    </>
  );
}

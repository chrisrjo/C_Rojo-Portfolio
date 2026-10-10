import ui1 from "../assets/ui1.jpg";
import ui2 from "../assets/ui2.jpg";
import todos from "../assets/todos.jpg";
import letsgo from "../assets/letsgo.jpg";
import Studyus from "../assets/Studyus.jpg";
import tin from "../assets/tin.png";
import tide from "../assets/tide.png";

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects">
        <h1>Projects</h1>
<div className="projects-container">
  <div className="project-card">
    <img src={ui1} alt="Ui Challenge 1" />
    <div className="card-content">
      <h3>UI Challenge 1</h3>
      <p>First ui Challenge in figma</p>
    </div>
    <div className="footer">
      <a href="https://www.figma.com/design/KZqy1pN1gOC3vVRhZe7OQo/Ui-challenge-1?m=auto&t=71Wp0yAb89X1op7Q-6"
        target="_blank"rel="noopener noreferrer" className="view-btn" > View Project</a>
    </div>
  </div>
  <div className="project-card">
    <img src={ui2} alt="Ui Challenge 2" />
    <div className="card-content">
      <h3>UI Challenge 2</h3>
      <p>Second ui Challenge in figma</p>
    </div>
    <div className="footer">
      <a href="https://www.figma.com/design/pYROFXkHmyogQlsxH3CyYT/ui-challenge-2?node-id=0-1&t=5ktRJ1JCcURgmykA-1"
        target="_blank"rel="noopener noreferrer" className="view-btn" > View Project</a>
    </div>
  </div>
  <div className="project-card">
    <img src={todos} alt="Todos App" />
    <div className="card-content">
      <h3>Awesome Todos</h3>
      <p>Awesome todos using Mern</p>
    </div>
    <div className="footer">
      <a href="https://awesometodos-xok3.onrender.com/"
        target="_blank"rel="noopener noreferrer" className="view-btn" > View Project</a>
    </div>
  </div>
  <div className="project-card">
    <img src={letsgo} alt="letsgo" />
    <div className="card-content">
      <h3>Lets go </h3>
      <p>Integrative 1 group project</p>
    </div>
    <div className="footer">
      <a href="https://www.figma.com/design/BZBrT1mz1qnNmV2bs9eoQO/Let-s-GO?m=auto&t=71Wp0yAb89X1op7Q-6"
        target="_blank"rel="noopener noreferrer" className="view-btn" > View Project</a>
    </div>
  </div>
  <div className="project-card">
    <img src={Studyus} alt="Studyus" />
    <div className="card-content">
      <h3>Studyus</h3>
      <p>HCI project in Figma</p>
    </div>
    <div className="footer">
      <a href="https://www.figma.com/design/erRLniSnBK1B5VhmrPif7o/StudyUS?m=auto&t=71Wp0yAb89X1op7Q-6"
        target="_blank"rel="noopener noreferrer" className="view-btn" > View Project</a>
    </div>
  </div>
  <div className="project-card">
    <img src={tin} alt="Tin" />
    <div className="card-content">
      <h3>Chris</h3>
      <p>First built portfolio</p>
    </div>
    <div className="footer">
      <a href="https://crojo-portfolio.vercel.app/"
        target="_blank"rel="noopener noreferrer" className="view-btn" > View Project</a>
    </div>
  </div>
  <div className="project-card">
    <img src={tide} alt="Tide Trace" />
    <div className="card-content">
      <h3>Tide Trace</h3>
      <p>Integrative 2 group project</p>
    </div>
    <div className="footer">
      <a href="https://tide-trace.vercel.app/"
        target="_blank"rel="noopener noreferrer" className="view-btn" > View Project</a>
    </div>
  </div>
</div>
      </section>
      <hr className="solid" />
    </>
  );
}

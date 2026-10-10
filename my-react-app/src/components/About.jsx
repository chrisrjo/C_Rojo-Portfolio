import istiro from "../assets/istiro.jpg";
export default function About() {
  return (
    <>
      <section id="aboutme" className="aboutme">
        <div className="aboutme-container">
          <h1>About Me</h1>
          <p>
            Hi, my name is Christina N. Rojo, a BSIT student at Western Institute of Technology.
            passionate about technology and everything that comes with it.
          </p>
          <p>
            As an IT student, I enjoy challenging myself and discovering new things. My web development skills are improving, 
            and I’m diving into design. I grow by creating, experimenting, and learning every step of the way.</p>
        </div>
        <img src={istiro} alt="photo" />
      </section>
      <hr className="solid" />
    </>
  );
}


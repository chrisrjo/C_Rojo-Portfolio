import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const homeSection = document.getElementById('home');

    if (!homeSection) return;

    const timeout = setTimeout(() => {
      homeSection.classList.add('home-visible');
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <nav>
        <a href="#home">Home</a>
        <a href="#aboutme">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contacts">Contacts</a>
      </nav>
      <section id="home" className="home home-hidden">
        <h1>Front-End Developer</h1>
        <h2>Life runs in loops, progress in steps</h2>
        <h3>BSIT Student</h3>
        <p>
          I’m an IT student who enjoys turning ideas into web pages that look sharp and feel smooth. 
          Coding has taught me patience—life’s challenges feel like bugs, and solving them keeps me grounded, 
          motivated, and always ready to grow.
        </p>
        <p> I’ve been working with JavaScript, HTML, React, Node.js, Java, and Python—and I enjoy taking on challenges that push me further.</p>
         <div className="socials-icons">
          <a href="https://www.facebook.com/profile.php?id=61585731012044" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://github.com/chrisrjo" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/christina-rojo-b75421372/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </section>
      <hr className="solid" />
    </>
  );
}

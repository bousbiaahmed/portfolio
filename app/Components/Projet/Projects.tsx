import "./Projects.css";


function Projects() {
  return (
    <div>
      <h1 className="Project">MY PROJECTS</h1>
      <p className="fron">
        In this project, I created a website using HTML and CSS <br />
        <br />
        I focused on building a clean and responsive design <br />
        <br />
        ensuring it looks great on all devices <br />
        <br />
        This experience helped me improve my front-end skills <br />
        <br />
        and allowed me to bring my design ideas to life <br /> <br />
        I&apos;m pleased with the final result!
      </p>
      <a href="" target="_blank">
        <img src="site.png" alt="Description de l'image" className="imsite" />
      </a>
      <p className="ecom">
        I created an e-commerce website using HTML, CSS, and JavaScript <br />
        <br />
        The site features a user-friendly interface and responsive design <br />{" "}
        <br />
        ensuring a smooth shopping experience on all devices <br />
        <br />
        I implemented JavaScript for interactivity, like product filtering and{" "}
        <br />
        <br />
        a dynamic shopping cart. This project enhanced my front-end skills{" "}
        <br />
        <br />
        while delivering a functional online shopping platform!
      </p>
      <a href="https://dynamic-gelato-066c88.netlify.app/" target="_blank">
        <img src="site2.png" alt="Description de l'image" className="imsite2" />
      </a>
    </div>
  );
}
export default Projects;

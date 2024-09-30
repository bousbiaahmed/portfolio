import "./About.css";
import ahmed from "/ahmed.jpeg";
import hack from "/hack.jpeg";

function About() {
  return (
    <div>
      <h1> Discover My Journey! </h1>
      <p className="paragh">" THE ACADEMIC PATHWAY💻 "</p>
      <p className="para">
        At just 20 years old, I’m a driven Computer Science student <br />{" "}
        <br />
        at the renowned Higher School of Computer Science of Mahdia (ISIMA){" "}
        <br />
        <br />
        My journey is fueled by a passion for solving complex challenges <br />
        <br />
        and mastering algorithms and data structures. With strong expertise{" "}
        <br />
        <br />
        in Python and C combined with a solid foundation in web development{" "}
        <br />
        <br />I excel at turning abstract ideas into refined solutions and
        engaging digital experiences.
      </p>
      <h1 className="EXp">" EXPERIANCES🌟 "</h1>
      <p className="exper">
        In the dynamic landscape of software development and innovation <br />{" "}
        <br />
        I embarked on a thrilling journey during the Digital Solutions Hackathon
        2023/2024 <br />
        <br />
        Competing with 20 talented teams, my standout project—a groundbreaking
        platform <br />
        <br />
        for connecting local artisans—achieved a notable 5th place ranking. 🏆✨{" "}
        <br />
        <br />
        This experience transcended the award, focusing <br /> <br />
        on elevating the art of craftsmanship within the Tunisian community!
      </p>
      <img src="ahmed.jpeg" alt="hack" className="imge" />
      <img src="hack.jpeg" alt="hack" className="imje" />
    </div>
  );
}
export default About;

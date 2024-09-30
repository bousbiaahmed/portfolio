import React from "react";
import Navbar from "./Components/Navbar";
import styles from "./page.module.css";
import SocialLinks from "./Components/Social";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactForm from "./Components/ContactForm";

function Home() {
  return (
    <body className={styles.body}>
      <div className={styles.page}>
        <main className={styles.main}></main>
        <title>ahmed</title>
        <h1 className={styles.Hi}>
          Hi, <br /> Dreamers! 💭 👋
        </h1>
        <p className={styles.pres}>
          I am <span className={styles.span}>Ahmed Bousbia</span>
        </p>{" "}
        <br />
        <p className={styles.presen}>
          {" "}
          I am a passionate MERN stack developer specializing <br /> <br />
          in building dynamic, scalable, and responsive web applications <br />{" "}
          <br />
          using MongoDB, Express, React, and Node.js <br /> <br />
          thrive on creating efficient solutions that deliver exceptional user
          experiences💻!
        </p>
        <section>
          <div className={styles.bgpulse}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
        <img src="/imaje.png" className={styles.image} />
        <Navbar />
        <SocialLinks />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
      </div>
    </body>
  );
}

export default Home;

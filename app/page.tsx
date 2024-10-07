import React from "react";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projet/Projects";
import ContactForm from "./Components/Contact/ContactForm";
import SocialLinks from "./Components/Social/Social";

function Home() {
  return (
    <body className={styles.body}>
      <div className={styles.page}>
         
        <title>ahmed</title>
        <div className={styles.animation}>
        <h1 className={styles.Hi}>
          Hi, <br /> Innovators! 💭 👋
        </h1>
        <p className={styles.pres}>
          I am <span className={styles.span}>Ahmed Bousbia</span>
        </p>{" "}
        <br />
        <p className={styles.presen}>
          {" "}
          I am a passionate MERN stack developer specializing 
          in building dynamic, scalable, and responsive web applications {" "}
          using MongoDB, Express, React, and Node.js 
          thrive on creating efficient solutions that deliver exceptional user
          experiences💻!
        </p></div>
       
        <img src="/imaje.png" className={styles.image} />
        <Navbar />
         <SocialLinks/> 
        
        <section id="about">
        <About />
        </section>
        <section id="skills">
        <Skills />
        </section>
        <section id="projects">
        <Projects />
        </section>
        <section id="contact">
        <ContactForm />
        </section>

        
        
      </div>
      
   


     
      

    </body>
  );
}

export default Home;

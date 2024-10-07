import React from "react";
import "./Social.css";
import { faFacebook, faInstagram, faLinkedin, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks: React.FC = () => {
  return (
    <div className=" social-links" >
      <a
        href="https://www.linkedin.com/in/ahmed-bousbia-2987792a3/"
        target="_blank"
        rel="noopener noreferrer"
      >
      <FontAwesomeIcon icon={faLinkedin }  className="lin"/>
      </a>
      <a
        href="https://www.instagram.com/ahmedbousbia_534/"
        target="_blank"
        rel="noopener noreferrer"
      >
         <FontAwesomeIcon icon={faSquareInstagram}  className="ins"/>
      </a>
      <a
        href="https://www.facebook.com/ahmed.bousbia.94"
        target="_blank"
        rel="noopener noreferrer"
      >
      <FontAwesomeIcon icon={faFacebook} className="fac" />
      </a>
    </div>
  );
};

export default SocialLinks;

/*import React from 'react';
import './Social.css'; // Pour le style

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/ahmed-bousbia-2987792a3/" target="_blank" rel="noopener noreferrer">
        LinkedIn 🤝
      </a>
      <a href="https://www.facebook.com/ahmed.bousbia.94" target="_blank" rel="noopener noreferrer">
        facebook 🐱
      </a>
      <a href="https://www.instagram.com/ahmedbousbia_534/" target="_blank" rel="noopener noreferrer">
        instagram 🐦
     
      </a>
    </div>
  );
};

export default SocialLinks;*/

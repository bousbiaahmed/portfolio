import React from "react";
import linked from "./linked.png";
import insta from "./insta.png";
import face from "./face.png";
import "./Social.css";

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/ahmed-bousbia-2987792a3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="linked.png" alt="LinkedIn" />
      </a>
      <a
        href="https://www.instagram.com/ahmedbousbia_534/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="insta.png" alt="instagram" />
      </a>
      <a
        href="https://www.facebook.com/ahmed.bousbia.94"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="face.png" alt="Facebook" />
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

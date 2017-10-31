import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="my-information">
        <span className="soc-links-caption">Like what you see? Follow me here! </span>
        <ul className="soc">
          <li><Link className="soc-linkedin" to="https://www.linkedin.com/in/victorwu3/"></Link></li>
          <li><Link className="soc-github" to="https://github.com/victorwu3"></Link></li>
          <li><Link className="soc-instagram soc-icon-last" to="#"></Link></li>
        </ul>
      </div>
      <div className="footer-links-row">
        <div className="footer-links-container">
          <div className="footer-column">
            <span>About TaskRabbit</span>
            <div className="links">
              <Link className="footer-link" to="#">Become a Tasker</Link>
              <Link className="footer-link" to="#">The TaskRabbit Elite</Link>
              <Link className="footer-link" to="#">Buy a Gift Card</Link>
              <Link className="footer-link" to="#">TaskRabbit for Good</Link>
              <Link className="footer-link" to="#">Help</Link>
            </div>
          </div>
          <div className="footer-column">
            <span>About Me</span>
            <div className="links">
              <Link className="footer-link" to="#">Portfolio</Link>
              <Link className="footer-link" to="#">Resume</Link>
              <Link className="footer-link" to="#">Github</Link>
              <Link className="footer-link" to="#">LinkedIn</Link>
            </div>
          </div>
          <div className="footer-column">
            <span>Other cool Stuff</span>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

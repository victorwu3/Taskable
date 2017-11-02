import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="my-information">
        <span className="soc-links-caption">Like what you see? Follow me here! </span>
        <ul className="soc">
          <li><a className="soc-linkedin" href="https://www.linkedin.com/in/victorwu3/"></a></li>
          <li><a className="soc-github" href="https://github.com/victorwu3"></a></li>
          <li><a className="soc-instagram soc-icon-last" href="https://www.instagram.com/taskrabbit/"></a></li>
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
              <a className="footer-link" href="https://github.com/victorwu3">Github</a>
              <a className="footer-link" href="https://www.linkedin.com/in/victorwu3/">LinkedIn</a>
            </div>
          </div>
          <div className="footer-column">
          </div>
        </div>
      </div>
      <div className="created-by">Created by Victor Wu</div>
    </footer>
  );
};


export default Footer;

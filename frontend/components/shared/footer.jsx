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
              <Link className="footer-link" to="/taskerform">Become a Tasker</Link>
              <a className="footer-link" href="https://www.taskrabbit.com/">TaskRabbit</a>
              <a className="footer-link" href="https://www.taskrabbit.com/taskrabbit-good">TaskRabbit for Good</a>
              <a className="footer-link" href="https://support.taskrabbit.com/hc/en-us">Help</a>
            </div>
          </div>
          <div className="footer-column">
            <span>About Me</span>
            <div className="links">
              <a className="footer-link" href="http://victorwu.me">Portfolio</a>
              <a className="footer-link" href="https://drive.google.com/file/d/1wfr454n6T0ij_Uu23SHNqtjZPjJL4Ztf/view?usp=sharing">Resume</a>
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

import React from 'react';
import { Link } from 'react-router-dom';
class Dashboard extends React.Component{

  render(){
    debugger
      return(
        <div>
          <div className="main">

            <div className="header-container">
              <header className="page-header">
                <div className="header-elements-container">
                  <a className="header-logo" href="#" ></a>
                  <div className="header-links-container">
                    <a href="#/dashboard" className="homepage-login-button">
                      <span>Dashboard</span>
                    </a>
                    <a href="#" className="homepage-login-button">
                      <span>Account</span>
                    </a>
                    <button onClick={this.props.logout}>Logout</button>
                  </div>
                </div>
              </header>
            </div>

            <div className="main-page">

            </div>


            <section className="footer-container">
              <footer>
                <div className="my-information">
                  <span className="soc-links-caption">Like what you see? Follow me here! </span>
                  <ul className="soc">
                    <li><a className="soc-linkedin" href="#"></a></li>
                    <li><a className="soc-github" href="#"></a></li>
                    <li><a className="soc-instagram soc-icon-last" href="#"></a></li>
                  </ul>
                </div>
                <div className="footer-links-row">
                  <div className="footer-links-container">
                    <div className="footer-column">
                      <span>About TaskRabbit</span>
                      <div className="links">
                        <a className="footer-link" href="#">Become a Tasker</a>
                        <a className="footer-link" href="#">The TaskRabbit Elite</a>
                        <a className="footer-link" href="#">Buy a Gift Card</a>
                        <a className="footer-link" href="#">TaskRabbit for Good</a>
                        <a className="footer-link" href="#">Help</a>
                      </div>
                    </div>
                    <div className="footer-column">
                      <span>About Me</span>
                      <div className="links">
                        <a className="footer-link" href="#">Portfolio</a>
                        <a className="footer-link" href="#">Resume</a>
                        <a className="footer-link" href="#">Github</a>
                        <a className="footer-link" href="#">LinkedIn</a>

                      </div>
                    </div>
                    <div className="footer-column">
                      <span>Other cool Stuff</span>
                    </div>

                  </div>
                </div>
              </footer>
            </section>


          </div>
        </div>
      );
    }

  }

export default Dashboard;

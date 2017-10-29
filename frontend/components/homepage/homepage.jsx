import React from 'react';
import { Link } from 'react-router-dom';
class Homepage extends React.Component{
  constructor(props) {
    super(props);
    this.updateSubject = this.updateSubject.bind(this);
  }

  updateSubject(subjectId) {
    return e => {
      this.props.updateSubject(subjectId);
      localStorage.setItem('currentSubject', JSON.stringify(subjectId));
    };
  }

  render(){
      return(
        <div>
          <div className="main">

            <div className="header-container">
              <header className="page-header">
                <div className="header-elements-container">
                  <Link className="header-logo" to="/" ></Link>
                  <div className="header-links-container">
                    <Link to="/login" className="homepage-login-button">
                      <span>Log in</span>
                    </Link>
                    <Link to="/signup" className="homepage-signup-button">
                      <span>Sign up</span>
                    </Link>
                  </div>
                </div>
              </header>
            </div>

            <div className="main-page">

              <div className="main-content">

                <div className="main-content-container">
                  <div className="main-content-title">
                    The convenient & fast way
                    <br></br>
                    to hire a tutor
                  </div>
                  <br></br>
                  <div className="main-content-subtitle">
                    Choose from over 10,000 carefully vetted and feedback rated Tutors to get quick help
                  </div>
                  <div className="main-content-button-container">
                    <Link to="tutors/form" className="main-content-button" onClick={this.updateSubject(1)}>Math</Link>
                    <Link to="tutors/form" className="main-content-button" onClick={this.updateSubject(2)}>Chemistry</Link>
                    <Link to="tutors/form" className="main-content-button" onClick={this.updateSubject(3)}>Biology</Link>
                    <Link to="tutors/form" className="main-content-button" onClick={this.updateSubject(4)}>English</Link>
                    <Link to="tutors/form" className="main-content-button" onClick={this.updateSubject(5)}>History</Link>
                    <Link to="tutors/form" className="main-content-button" onClick={this.updateSubject(6)}>Test Prep</Link>
                  </div>
                  <div className="main-content-searchbar-container">
                    <div className="main-content-searchbar">
                      <form className="search-form">
                        <i className="material-icons">
                          search
                        </i>
                        <input type="text" name="words" placeholder="Need something different?"></input>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="get-inspired">

            </section>

            <section className="how-it-works">

            </section>
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

export default Homepage;

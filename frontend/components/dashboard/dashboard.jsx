import React from 'react';
import { Link } from 'react-router-dom';
import BookingItem from './booking_item';

class Dashboard extends React.Component{

  constructor(props) {
    super(props);
    this.updateSubject = this.updateSubject.bind(this);
    this.mouseEnter=this.mouseEnter.bind(this);
    this.mouseLeave=this.mouseLeave.bind(this);
  }

  componentDidMount(){
    this.props.fetchHiredTutors(this.props.currentUser.id);
  }
  updateSubject(subjectId) {
    return e => {
      this.props.updateSubject(subjectId);
      localStorage.setItem('currentSubject', JSON.stringify(subjectId));
    };
  }

  mouseEnter(e) {
      $(e.currentTarget.lastChild.lastChild.lastChild).addClass('hover');
  }

  mouseLeave(e) {
      $(e.currentTarget.lastChild.lastChild.lastChild).removeClass('hover');
  }

  render(){
    let hiredTutors = this.props.hiredTutors || [];
    debugger
    let results = (hiredTutors.length === 0) ?
      (<div className="none-available">You have no current bookings at this time.</div>)
       : hiredTutors.map((booking, idx) => {
       return (
         <BookingItem key={idx} booking={booking}/>
       );
     });
    const currentUser = this.props.currentUser;
      return(
        <div>
          <div className="main">

            <div className="header-container">
              <header className="page-header">
                <div className="header-elements-container">
                  <Link className="header-logo" to="#" ></Link>
                  <div className="header-links-container">
                    <Link to="/dashboard" className="homepage-login-button">
                      <span>Dashboard</span>
                    </Link>
                    <Link to="#" className="homepage-login-button">
                      <span>Account</span>
                    </Link>
                    <span onClick={this.props.logout} className="homepage-signup-button">Logout</span>
                  </div>
                </div>
              </header>
            </div>

            <div className="dashboard-main-page">
              <div className="dashboard-container">
                <div className="row greeting">
                  <div>
                    <h1>Welcome to Taskable, {currentUser.fname}!</h1>
                  </div>
                </div>

                {results}

                <div className="row how-to-get-started">
                </div>

                <div className="form-pictures">
                  <div className="tile-container">
                    <Link to="tutors/form" onClick={this.updateSubject(3)} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                      <div className="tutor-link-tile biology">
                        <div className="flag-container">
                          <div className="subject-title-sub">Biology</div>
                        </div>
                      </div>
                    </Link>
                    <Link to="tutors/form" onClick={this.updateSubject(6)} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                      <div className="tutor-link-tile testprep">
                        <div className="flag-container">
                          <div className="subject-title-sub">Test Prep</div>
                        </div>
                      </div>
                    </Link>
                    <Link to="tutors/form" onClick={this.updateSubject(2)} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                      <div className="tutor-link-tile chemistry">
                        <div className="flag-container">
                          <div className="subject-title-sub">Chemistry</div>
                        </div>
                      </div>
                    </Link>
                    <Link to="tutors/form" onClick={this.updateSubject(7)} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                      <div className="tutor-link-tile coding">
                        <div className="flag-container">
                          <div className="subject-title-sub">Coding</div>
                        </div>
                      </div>
                    </Link>
                    <Link to="tutors/form" onClick={this.updateSubject(5)} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                      <div className="tutor-link-tile history">
                        <div className="flag-container">
                          <div className="subject-title-sub">History</div>
                        </div>
                      </div>
                    </Link>
                    <Link to="tutors/form" onClick={this.updateSubject(9)} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                      <div className="tutor-link-tile physics">
                        <div className="flag-container">
                          <div className="subject-title-sub">Physics</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <section className="footer-container">
              <footer>
                <div className="my-information">
                  <span className="soc-links-caption">Like what you see? Follow me here! </span>
                  <ul className="soc">
                    <li><Link className="soc-linkedin" to="#"></Link></li>
                    <li><Link className="soc-github" to="#"></Link></li>
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
            </section>
          </div>
        </div>
      );
    }
  }

export default Dashboard;

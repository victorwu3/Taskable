import React from 'react';
import { Link } from 'react-router-dom';
import BookingItem from './booking_item';
import Footer from '../shared/footer';
import CompleteBookingContainer from './complete_booking_container';

class Dashboard extends React.Component{

  constructor(props) {
    super(props);
    this.updateSubject = this.updateSubject.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      completed: false,
      modalIsOpen: false,
    };
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

  openModal(e) {
    localStorage.setItem('reviewUserId', e.target.id);
    localStorage.setItem('reviewSubjectId', e.target.parentElement.id);
    localStorage.setItem('bookingId', e.target.parentElement.parentElement.id);
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  mouseEnter(e) {
      $(e.currentTarget.lastChild.lastChild.lastChild).addClass('hover');
  }

  mouseLeave(e) {
      $(e.currentTarget.lastChild.lastChild.lastChild).removeClass('hover');
  }

  render(){
    let hiredTutors = this.props.hiredTutors || [];
    let results = (hiredTutors.length === 0) ?
      (<div className="no-booking-available">You have no current bookings at this time.</div>)
       : hiredTutors.filter(booking=> {
         return !booking.completed;
       }).map((booking, idx) => {
       return (
         <BookingItem key={idx} booking={booking} completeBooking={this.openModal}/>
       );
     });
    const currentUser = this.props.currentUser;
      return(
        <div>
          <CompleteBookingContainer
            isOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            author={this.props.currentUser.id}
            />
          <div className="main">

            <div className="header-container">
              <header className="page-header">
                <div className="header-elements-container">
                  <Link className="header-logo" to="#" ></Link>
                  <div className="header-links-container">
                    <Link to="/dashboard" className="homepage-login-button">
                      <span>Dashboard</span>
                    </Link>
                    <Link to="/account" className="homepage-login-button">
                      <span>Account</span>
                    </Link>
                    <span onClick={this.props.logout} className="homepage-signup-button">Logout</span>
                  </div>
                </div>
              </header>
            </div>

            <div className="dashboard-main-page">
              <div className="dashboard-container">
                <div className="row">
                  <div className="greeting">
                    <img className="greeting-picture" src={currentUser.image_url} />
                    <h1>Welcome to Taskable, {currentUser.fname.charAt(0).toUpperCase() + currentUser.fname.slice(1)}!</h1>
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
              <Footer />
            </section>
          </div>
        </div>
      );
    }
  }

export default Dashboard;

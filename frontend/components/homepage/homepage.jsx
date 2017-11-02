import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../shared/footer';
import Results from './results';
import HowItWorks from './how_it_works';
import Header from './header';

const Subjects = [
  ['Coding', 7],
  ['Accounting', 8],
  ['Physics', 9]
]

class Homepage extends React.Component{
  constructor(props) {
    super(props);
    this.updateSubject = this.updateSubject.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      input: ""
    }
  }

  updateSubject(subjectId) {
    return e => {
      this.props.updateSubject(subjectId);
      localStorage.setItem('currentSubject', JSON.stringify(subjectId));
    };
  }

  matches(){
    const matches = [];
    if (this.state.input.length === 0) {
      return Subjects;
    }
    Subjects.forEach(sub => {
      let name = sub[0].slice(0, this.state.input.length);
      if (name.toLowerCase() === this.state.input.toLowerCase()) {
        matches.push(sub);
      }
    });
    return matches;
  }

  handleChange(event){
    this.setState({input: event.currentTarget.value});
  }

  handleFocus(){
    $(document.querySelector('#search-results')).addClass('active');
    $(document.querySelector('#search-results')).removeClass('hidden');
  }

  handleUnfocus(){
    $(document.querySelector('#search-results')).removeClass('active');
    $(document.querySelector('#search-results')).addClass('hidden');
  }

  render(){
    let results = this.matches().map((subject,i) => {
      return (
        <Results key={i} updateSubject={this.updateSubject} subject={subject} />
      )
    });
      return(
        <div>
          <div className="main">
            <Header />
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
                        <i className="material-icons search-icon">
                          search
                        </i>
                        <input type="text" name="words" value={this.state.input} placeholder="Need something different?"
                          onChange={this.handleChange}
                          onFocus={this.handleFocus}
                          onBlur={()=>setTimeout(this.handleUnfocus, 100)}></input>
                      </form>
                      <ul id="search-results" className="hidden">
                        {results}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <HowItWorks />
            <section className="footer-container">
              <Footer />
            </section>
          </div>
        </div>
      );
    }
  }

export default Homepage;

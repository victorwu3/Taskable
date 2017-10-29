import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TutorListItem from './tutor_list_item';
import DateBoxItem from './date_box_item';

class TutorShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.chooseBox = this.chooseBox.bind(this);
    this.handleBook = this.handleBook.bind(this);
    this.state = {
      tutors: JSON.parse(localStorage.getItem('tutors')),
      sort: 'recommended',
      time: [1,2,3],
      date: 0,
      day: (new Date).getDay(),
      selected: ((new Date).toDateString().slice(4,10).trim())
    };
    localStorage.setItem('selectedDate', this.state.selected);
    localStorage.setItem('selectedDay', (new Date).toDateString().slice(0,3));
    localStorage.setItem('selectedTime', "I'm flexible");
  }

  componentWillReceiveProps(newProps) {
    if (newProps.tutors) {
      localStorage.setItem('tutors', JSON.stringify(newProps.tutors));
      this.setState({ tutors: newProps.tutors});
    }
  }
  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  chooseBox(e) {
    $(document.querySelector('.selected-date')).removeClass('selected-date');
    $(e.currentTarget).addClass('selected-date');
    localStorage.setItem('selectedDate', e.currentTarget.firstElementChild.nextElementSibling.innerText);
    localStorage.setItem('selectedDay', e.currentTarget.firstChild.innerText);
    this.setState({day: e.currentTarget.previousSibling.value});
  }

  dateArrays(num) {
    let result = [];
    let x = new Date;
    for (var i = 0; i < num; i++) {
      result.push({
        date: (x.toDateString().slice(4,10).trim()),
        day: x.getDay(),
        day_string: x.toDateString().slice(0,3)
      });
      x.setDate(x.getDate() + 1);
    }
    result[0].day_string = 'Today';
    return result;
  }

  sortTutors() {
    let result;
    switch (this.state.sort) {
      case 'priceAsc':
        result = this.state.tutors.sort(function(a,b) {
          return a.rate - b.rate;
        });
        return result;
      case 'priceDsc':
        result = this.state.tutors.sort(function(a,b) {
          return b.rate - a.rate;
        });
        return result;
      case 'num_completed':
        result = this.state.tutors.sort(function(a,b) {
          return b.num_completed - a.num_completed;
        });
        return result;
      default: return this.state.tutors;
    }
  }

  handleBook(id) {
    return ((e) => {
      const times = { 1: 'Morning 8AM-12PM', 2: 'Afternoon 12PM - 4PM', 3: 'EVENING 4PM-8PM', '1,2,3': "I'm Flexible"};
      localStorage.setItem('selectedTime', times[this.state.time]);
      let selectedTutor = JSON.parse(localStorage.getItem('tutors')).filter(tutor=>{return tutor.id===id;});
      localStorage.setItem('selectedTutor', JSON.stringify(selectedTutor));
      this.props.history.push('/tutors/confirm');
    }).bind(this);
  }

  render(){
    let dates = this.dateArrays(14);
    let dateBoxes = dates.map((date,idx)=> {
      return(
        <DateBoxItem date={date} key={idx} selected={this.state.selected} chooseBox={this.chooseBox}/>
      );
    });
    let times = Array.from(this.state.time).map(x => x * (this.state.day === '0' ? 7 : this.state.day));
    let sortedTutors = this.sortTutors();
    sortedTutors = sortedTutors.filter( tutor => {
      return times.some(time => {
        return tutor.times.includes(time);
      });
    });
    let results = (sortedTutors.length===0) ?
     (<div className="none-available">Sorry! There are no tutors available at this time.</div>)
      : sortedTutors.map((tutor, idx) => {
      return (
        <TutorListItem key={idx} tutor={tutor} handleBook={this.handleBook}/>
      );
    });

    return (
      <div className="main">
        <div className="header-container">
          <header className="page-header">
            <div className="header-elements-container">
              <Link className="header-logo" to="/" ></Link>
            </div>
          </header>
        </div>
          <div className="build-progress">
            <div className="build-progress-container">
              <div className="build-progress-step not-active">
                <i></i>
                <span>1. Fill Out Tutor Details</span>
              </div>
              <div className="build-progress-step">
                <i></i>
                <span>2. View Tutors and Price</span>
              </div>
              <div className="build-progress-step not-active">
                <i></i>
                <span>3. Confirm & Book</span>
              </div>
            </div>
          </div>

          <div className="build-trust-banner">
            <div className="build-trust-container">
              <div className="trust-icon"></div>
            </div>
          </div>

          <div className="form-container">
            <div className="form-title-container">
              <div className="form-title">
                <p className="form-title-words">Pick a Tutor</p>
              </div>
              <div className="form-subtitle">
                <p>After booking, you can chat with your Tasker, agree on an exact time, or go over any requirements or questions, if necessary.</p>
              </div>
            </div>

            <div className ="recommendations-container">
              <div className="recommendations-filter-container">
                <div className="recommendations-filter-panel">
                  <div className="recommendations-filter">
                    <h4 className="recommendations-filter-title">
                      <span>Sorted By:</span>
                    </h4>
                    <select className="filter-dropdown" onChange={this.handleChange('sort')}>
                      <option value="Recommended">Recommended</option>
                      <option value="priceAsc">Price (lowest to highest)</option>
                      <option value="priceDsc">Price (highest to lowest)</option>
                      <option value="num_completed">Number of Sessions Completed</option>
                      <option value="Rating">Most Reviews</option>
                    </select>
                  </div>
                  <div className="recommendations-filter">
                    <h4 className="recommendations-filter-title">
                      <span>Task Date & Time:</span>
                    </h4>
                    <div className="filter-time-container">
                      <div className="datetime-window-container">
                        {dateBoxes}
                      </div>
                      <div className="time-period-dropdown">
                        <select className="time-dropdown" onChange={this.handleChange('time')}>
                          <option value={[1,2,3]}>I'm Flexible</option>
                          <option value={1}>Morning 8AM - 12PM</option>
                          <option value={2}>Afternoon 12PM - 4PM</option>
                          <option value={3}>Evening 4PM - 8PM</option>
                        </select>
                      </div>
                      <div>
                        <span className="filter-subtitle">You can agree later on an exact start time with your selected Tutor.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="recommendations-results-container">
                <div className="recommendations-results-list">
                  {results}
                </div>
              </div>
            </div>

          </div>
      </div>
    );
  }
}
export default TutorShow;

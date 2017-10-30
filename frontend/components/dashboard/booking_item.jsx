import React from 'react';

class BookingItem extends React.Component {



  render() {
    let booking = this.props.booking;

    return (
      <div className="booking-item">
        <div className="recommendations-result-figure">

        </div>
        <div className="recommendations-result-content">
          <div className="recommendations-result-top-row">
            <div className="result-name">{booking.fname.charAt(0).toUpperCase() + booking.fname.slice(1)} {booking.lname.slice(0,1).toUpperCase()}.</div>
            <div className="result-rate">${booking.rate}/hr</div>
          </div>
          <ul className="result-info">
            <li>{booking.description}</li>
          </ul>
          <div className="blurb">{booking.location}</div>

        </div>
      </div>
    );
  }
}

export default BookingItem;

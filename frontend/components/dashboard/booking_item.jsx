import React from 'react';

class BookingItem extends React.Component {



  render() {
    let booking = this.props.booking;
    return (
      <div className="booking-item">
        <form id={booking.booking_id}>
          <div className="booking-result-figure">
            <img className="booking-picture" src={booking.image_url} />
            <div className="booking-name">{booking.fname.charAt(0).toUpperCase() + booking.fname.slice(1)} {booking.lname.slice(0,1).toUpperCase()}.</div>
            <div className="booking-rate">${booking.rate}/hr</div>
          </div>
          <div className="booking-date-time-location">
            <div className="booking-date-container">
              <span className="booking-date">{booking.date}</span>
              <span>{booking.time_period}</span>
            </div>
            <div className="booking-location-container">
              <label>Location</label>
              <span>{booking.location}</span>
            </div>
          </div>
          <div className="booking-content">
            <label>Booking description</label>
            <span>{booking.description}</span>
          </div>
          <div className="booking-complete-container" id={booking.subject_id}>
            <button
              className="complete-booking-button"
              onClick={this.props.completeBooking}
              id={booking.id}
              >Complete</button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookingItem;

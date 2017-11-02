import { connect } from 'react-redux';
import CompleteBooking from './complete_booking';
import { createReview, updateBooking } from '../../actions/tutor_actions';


const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createReview: (userId) => dispatch(createReview(userId)),
    updateBooking: (bookingId) => dispatch(updateBooking(bookingId))
});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompleteBooking);

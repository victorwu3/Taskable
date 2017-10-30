import { connect } from 'react-redux';
import TutorConfirm from './tutor_confirm';
import { fetchTutors, createBooking, fetchHiredTutors } from '../../actions/tutor_actions';

const mapStateToProps = (state, ownProps) => {
  return (
    { loggedIn: Boolean(state.session.currentUser),
     errors: state.errors.session,
     currentSubject: state.ui.currentSubject,
     params: state.tutors.params,
     tutors: state.tutors.tutors,
     formType: state.ui.formType,
     currentUser: state.session.currentUser
   }
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTutors: params => dispatch(fetchTutors(params)),
  createBooking: params => dispatch(createBooking(params)),
  fetchHiredTutors: userId => dispatch(fetchHiredTutors(userId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorConfirm);

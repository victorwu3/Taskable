import { connect } from 'react-redux';
import TutorForm from './tutor_form';
import { fetchTutors } from '../../actions/tutor_actions';

const mapStateToProps = (state, ownProps) => {
  return (
    { loggedIn: Boolean(state.session.currentUser),
     errors: state.errors.session,
     currentSubject: state.ui.currentSubject,
     params: state.tutors.params
   }
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTutors: params => dispatch(fetchTutors(params)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorForm);

import { connect } from 'react-redux';
import TutorShow from './tutor_show';
import { fetchTutors } from '../../actions/tutor_actions';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return (
    { loggedIn: Boolean(state.session.currentUser),
     errors: state.errors.session,
     currentSubject: state.ui.currentSubject,
     params: state.tutors.params,
     tutors: state.tutors.tutors,
     formType: state.ui.formType
   }
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTutors: params => dispatch(fetchTutors(params)),
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorShow);

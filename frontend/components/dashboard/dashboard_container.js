import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
import { updateSubject } from '../../actions/ui_actions';
import { fetchHiredTutors } from '../../actions/tutor_actions';


const mapStateToProps = (state) => {
  debugger
  return { currentUser: state.session.currentUser, hiredTutors: state.tutors.hiredTutors };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    updateSubject: id => dispatch(updateSubject(id)),
    fetchHiredTutors: (userId) => dispatch(fetchHiredTutors(userId))
});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
import { updateSubject } from '../../actions/ui_actions';


const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    updateSubject: id => dispatch(updateSubject(id))
});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

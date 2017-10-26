import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return { logout: () => dispatch(logout()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

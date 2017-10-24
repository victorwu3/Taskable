import { connect } from 'react-redux';
import Homepage from './homepage';
import { logout, login, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};


export default connect(
  mapStateToProps,
  null
)(Homepage);

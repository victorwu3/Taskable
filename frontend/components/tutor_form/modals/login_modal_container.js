import { connect } from 'react-redux';
import LoginModal from './login_modal';
import { fblogin } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return (
    { loggedIn: Boolean(state.session.currentUser),
     errors: state.errors.session,
   }
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fblogin: email => dispatch(fblogin(email))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);

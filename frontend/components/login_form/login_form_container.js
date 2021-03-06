import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, fblogin, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return (
    { loggedIn: Boolean(state.session.currentUser),
     errors: state.errors.session,
   }
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user)),
  fblogin: email => dispatch(fblogin(email)),
  clearErrors: () => dispatch(clearErrors())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

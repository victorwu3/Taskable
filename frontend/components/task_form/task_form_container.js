import { connect } from 'react-redux';
import TaskForm from './task_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return (
    { loggedIn: Boolean(state.session.currentUser),
     errors: state.errors.session,
   }
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(signup(user)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
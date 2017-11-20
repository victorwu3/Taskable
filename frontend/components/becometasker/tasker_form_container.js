import { connect } from 'react-redux';
import TaskerForm from './tasker_form';
import { createTutor } from '../../actions/tutor_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    createTutor: (params) => dispatch(createTutor(params))
});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskerForm);

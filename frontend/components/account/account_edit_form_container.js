import { connect } from 'react-redux';
import AccountEditForm from './account_edit_form';
import { updateUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = dispatch => {
  return { updateUser: user => dispatch(updateUser(user)) };
};

export default connect(
  mapStateToProps,
  null
)(AccountEditForm);

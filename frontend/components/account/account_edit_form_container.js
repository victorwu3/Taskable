import { connect } from 'react-redux';
import AccountEditForm from './account_edit_form';
import { updateUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = dispatch => {
  return { updateUser: (params) => dispatch(updateUser(params)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountEditForm);

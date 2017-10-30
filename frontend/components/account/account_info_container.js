import { connect } from 'react-redux';
import AccountInfo from './account_info';

const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};

export default connect(
  mapStateToProps,
  null
)(AccountInfo);

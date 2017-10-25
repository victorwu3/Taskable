import { connect } from 'react-redux';
import Homepage from './homepage';
import { updateSubject } from '../../actions/ui_actions';

const mapStateToProps = (state) => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = dispatch => ({
  updateSubject: id => dispatch(updateSubject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);

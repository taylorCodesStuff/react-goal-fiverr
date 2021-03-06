import About from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../actions/auth0';
import { removeSession } from '../../actions/authActions';

const mapStateToProps = (state) => {

  return {
    pending: state.userReducer.pending,
    success: state.userReducer.success,
    error: state.userReducer.error,
    profile: state.userReducer.profile,
    token: state.authReducer.sessionItems.accessToken
  };

};

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    fetchUser,
    removeSession
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(About);
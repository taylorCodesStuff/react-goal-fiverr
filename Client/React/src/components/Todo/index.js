import Todo from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addItem, getItems } from '../../actions/todoActions';
import { updateWallet } from '../../actions/userActions';

const mapStateToProps = (state) => {
    return {
        token: state.authReducer.sessionItems.accessToken,
        items: state.todoReducer.items,
        wallet: state.userReducer.wallet
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        addItem,
        getItems,
        updateWallet
    }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
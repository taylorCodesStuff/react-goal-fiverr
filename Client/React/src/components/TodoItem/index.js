import TodoItem from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { updateItem, deleteItem } from '../../actions/todoActions';
import { updateWallet } from '../../actions/userActions';


const mapStateToProps = (state) => {
    return {
        token: state.authReducer.sessionItems.accessToken,
        credit: state.userReducer.credit
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        updateItem,
        deleteItem,
        updateWallet
    }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
import { bindActionCreators } from "redux";

const initialState = {
    pending: false,
    success: false,
    error: false,
    profile: {
        name: '',
        email: '',
        picture: ''
    },
    wallet: 0,
    credit: 0
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        
    case 'FETCH_USER_PENDING':
        return {
            ...state,
            pending: true,
            success: false,
            error: false
        }

    case 'FETCH_USER_SUCCESS':
        return {
            ...state,
            profile: action.profile,
            pending: false,
            success: true,
            error: false
        }

    case 'FETCH_USER_ERROR':
        return {
            ...state,
            pending: false,
            success: false,
            error: true
        }

    case 'STORE_USER_PENDING':
        return {
            ...state,
            storePending: true,
            storeSuccess: false,
            storeError: false
        }

    case 'STORE_USER_SUCCESS':
        return {
            ...state,
            storePending: false,
            storeSuccess: true,
            storeError: false
        }

    case 'STORE_USER_ERROR':
        return {
            ...state,
            storePending: false,
            storeSuccess: false,
            storeError: true
        }
    
    case 'UPDATE_WALLET_PENDING':
        return {
            ...state,
            walletPending: true,
            walletSuccess: false,
            walletError: false
        }

    case 'UPDATE_WALLET_SUCCESS':
        return {
            ...state,
            walletPending: false,
            walletSuccess: true,
            walletError: false,
            wallet: action.wallet
        }
    
    case 'UPDATE_WALLET_ERROR':
        return {
            ...state,
            walletPending: false,
            walletSuccess: false,
            walletError: true
        }

    case 'FETCH_USER':
        return {
            ...state,
            credit: action.credit
        }

    default:
        return state;
    }
}

export default userReducer;
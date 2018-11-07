import { APP_SERVER_URL } from '../config';
import {FETCH_USER} from './types';
import axios from 'axios';
 
export const fetchUserPending = () => {
    return {
        type: 'FETCH_USER_PENDING'
    }
}

export const fetchUserSuccess = (profile) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        profile
    }
}

export const fetchUserError = () => {
    return {
        type: 'FETCH_USER_ERROR'
    }
}

export const storeUserPending = () => {
    return {
        type: 'STORE_USER_PENDING'
    }
}

export const storeUserSuccess = (user) => {
    console.log('USER ACTION: ', user);
    return {
        type: 'STORE_USER_SUCCESS',
        user
    }
}

export const storeUserError = () => {
    return {
        type: 'STORE_USER_ERROR'
    }
}

export const updateWalletPending = () => {
    return {
        type: 'UPDATE_WALLET_PENDING'
    }
}

export const updateWalletSuccess = (result) => {
    return {
        type: 'UPDATE_WALLET_SUCCESS',
        credit: result.wallet
    }
}

export const updateWalletError = () => {
    return {
        type: 'UPDATE_WALLET_ERROR'
    }
}


export const storeUser = (accessToken, user) => (dispatch) => {

    dispatch(storeUserPending());

    fetch(`${APP_SERVER_URL}/users/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            email: user.email,
        }),
    })
    .then(res => {
        if (res.status !== 200)
            throw `failed to store user with status ${res.status}`;
        return res.json();
    })
    .then(result => {
        console.log('RESULT ', result);
        dispatch(storeUserSuccess(result));
    })
    .catch(error => {
        dispatch(storeUserError());
    })
}

export const handleStripeToken = (token) => async dispatch => {
    console.log(token);
    // const res = await axios.post(`${APP_SERVER_URL}/billing/stripe`, token);
    const res = await axios.post(`${APP_SERVER_URL}/billing/charge`, token.id);
    dispatch({type: 'FETCH_USER', payload: res.data});
    
}

export const updateWallet = (accessToken, minus, balance, equation) => (dispatch) => {
    
    dispatch(updateWalletPending());

    fetch(`${APP_SERVER_URL}/users`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            wallet: minus,
            add: balance,
            equation: equation
        }),
    })
    .then(res => {
        if(res.status !== 200)
            throw `failed to update wallet ${res.status}`;
        return res.json();
    })
    .then(result => {
        console.log('RESULT: ', result);
        dispatch(updateWalletSuccess(result));
    })
    .catch(error => {
        dispatch(updateWalletError());
    })
}


export const updateCreditBalance = (amt) => {
    console.log('amt: ', amt);
    
    return {
        type: 'UPDATE_CREDIT_BALANCE',
        credit: amt
    }
}

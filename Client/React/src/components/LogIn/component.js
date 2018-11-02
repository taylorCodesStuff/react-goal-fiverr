import React, { Component } from 'react';
import { logIn, refreshAccessToken } from '../../utils/auth0';
import { REACT_UNIVERSAL_REPO_URL } from '../../config';
import './LogIn.css';


class LogIn extends Component {

    componentDidMount() {
        //If renew access token fails, start login prompt
        if (this.props.refreshError) {
            logIn();
            return;
        }
    }

    onLogin = () => {
        refreshAccessToken();
    }

    render() {
        return (
            <div className="login-wrapper">
                {/* <h1 class="site-header">Goals</h1> */}
                <div className="description-wrapper">
                    <p className="app-description">
                        [[Random, inspirational quote]]
                    </p>
                </div>
                <button className='login-btn' onClick={this.onLogin}>
                    Log In
                </button>
            </div>
        );
    }
}

export default LogIn;
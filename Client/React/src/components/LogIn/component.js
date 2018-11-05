import React, { Component } from 'react';
import { logIn, refreshAccessToken } from '../../utils/auth0';
import { REACT_UNIVERSAL_REPO_URL } from '../../config';
import './LogIn.css';


class LogIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            quotes: [
                "You can't have a million dollar dream with a minimum-wage work ethic"
            ]
        };
    }

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
                <h1 class="site-header">Goal Enforcer</h1>
                <div className="description-wrapper">
                    <div className="app-description">
                        {this.state.quotes[0]}
                    </div>
                </div>
                <button className='login-btn' onClick={this.onLogin}>
                    Log In
                </button>
            </div>
        );
    }
}

export default LogIn;
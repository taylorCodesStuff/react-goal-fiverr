import React, { Component } from 'react';
import { logOut } from '../../utils/auth0';
import './About.css';
import Header from '../Header';

class About extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.token)
    }

    onLogOut = () => {
        this.props.removeSession();
        logOut();
    }

    render() {
        return (
            <div>
                <Header />
                
            </div>
        );
    }
}

export default About;
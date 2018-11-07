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
            <div className="about">
                <Header />
                <section className="info-section">
                    <h2>What do I do?</h2>
                    <p className="p-text">
                        This is a hold-your-feet-to-the-fire app. 
                        It's designed to help you commit to your goals
                        by creating a painful outcome should you fail.
                    </p>
                    
                    <ul className="unordered-list">
                        <li>Choose a goal or task</li>
                        <li>Pick a date that you need to accomplish the goal or task by</li>
                        <li>Each goal costs $5 so make sure you have enough credits on your account</li>
                        <li>You can buy 20 credits for $20 at a time</li>
                        <li>If you complete your task before the due date, you get your credits back</li>
                        <li>Otherwise, you lose them</li>
                    </ul>
                    
                </section>
            </div>
        );
    }
}

export default About;
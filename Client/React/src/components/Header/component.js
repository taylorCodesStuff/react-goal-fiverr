import React, { Component } from 'react';
import { logOut } from '../../utils/auth0';
import './Header.css';
import {NavLink} from 'react-router-dom';
import Payments from '../Payments';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../CheckoutForm';

class Header extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.token)
    }

    onLogOut = () => {
        this.props.removeSession();
        logOut();
    }

    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/about">New? Start Here!</NavLink></li>
                    <li><NavLink exact to="/">My Goals</NavLink></li>
                    {/* <li><Payments /></li> */}
                    <li><NavLink to="/checkout">Add Credits</NavLink></li>
                    {/* <li>
                    <StripeProvider apiKey="pk_test_YKmWpGEng6wIUHEsJL6H6Nfr">
                        <div className="example">
                        <Elements>
                            <CheckoutForm />
                        </Elements>
                        </div>
                    </StripeProvider>
                    </li> */}
                    <li className="credit-balance">Credit Balance: {this.props.credits}</li>
                </ul>
            </nav>
        );
    }
}

export default Header;

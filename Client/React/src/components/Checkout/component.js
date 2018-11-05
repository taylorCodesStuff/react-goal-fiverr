import React, { Component } from 'react';
import { logOut } from '../../utils/auth0';
import './Checkout.css';
import {NavLink} from 'react-router-dom';
import Payments from '../Payments';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../CheckoutForm';
import Header from '../Header';

class Checkout extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.token)
    }

    onLogOut = () => {
        this.props.removeSession();
        logOut();
    }

    render() {
        return (
            <div className="checkout">
                <Header />
                <div className="checkout-form">
                    <StripeProvider apiKey="pk_test_YKmWpGEng6wIUHEsJL6H6Nfr">
                        <div className="example">
                            <fieldset>
                                <Elements>
                                    <CheckoutForm 
                                        
                                    />
                                </Elements>
                            </fieldset>
                        </div>
                    </StripeProvider>
                </div>         
            </div>
        );
    }
}

export default Checkout;

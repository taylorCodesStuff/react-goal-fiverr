import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './payments.css';
import { handleStripeToken } from '../../actions/userActions';

class Payments extends Component {

    

    render() {
        
        return (
            <StripeCheckout
              name="Add Goal Credits"
              description="Complete your goal and get $4 back"
              amount={500}
              token={token => this.props.handleStripeToken(token)}
              stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
            >
              <button className="btn-credits">
                  Add Goal Credits
              </button>
            </StripeCheckout>
        );
    }
}

export default Payments;

// REACT_APP_STRIPE_PUB_KEY
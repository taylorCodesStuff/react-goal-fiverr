import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { APP_SERVER_URL } from '../../config';
import { Redirect, NavLink } from 'react-router-dom';
import { updateCreditBalance } from '../../actions/userActions';
import './CheckoutForm.css';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      complete: false
    }
  }
 
  async submit(ev) {
      // User clicked submit
    console.log(this)
    let {token} = await this.props.stripe.createToken({name: "Name"});
    console.log(token);
    let response = await fetch(`${APP_SERVER_URL}/billing/charge`, {
        method: "POST",
           headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${this.props.token}`,
        },
        body: JSON.stringify({token})
    });

    // if (response.ok) console.log("Purchase Complete!")
    if (response.ok) {
      console.log("Purchase Complete!");
      <Redirect to="/" />
      console.log('Update credit balance');
      // this.props.updateCreditBalance(20);
      this.props.updateWallet(this.props.token, 20, this.props.credit, 'add');
      this.setState({complete: true});
    }
  }

  


    render() {
    console.log(this)

    if(this.state.complete) return (
        <h1>Purchase Complete!</h1>
      );
        
    return (
      <div className="checkout">
        <p className="p-checkout">Would you like to add 20 credits to your account?</p>
        <CardElement className="StripeElement"
          style={{
            base: {
              fontSize: '18px',
              color: '#31325F'
            }
          }} 
        />
        <button className="pay-button" onClick={this.submit}>Submit Payment</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

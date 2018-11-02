import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { APP_SERVER_URL } from '../../config';
import { Redirect, NavLink } from 'react-router-dom';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
    /*
     *     fetch(`${APP_SERVER_URL}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            title: item.title,
            dueDate: item.dueDate,
            wager: item.wager
        }),
    })*/
 
    

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
      <NavLink exact to="/"><Redirect to="/" /></NavLink>
    }
  
  }

    render() {
    console.log(this)
        
    return (
      <div className="checkout">
        <p>Would you like to add 20 credits to your account?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
        
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

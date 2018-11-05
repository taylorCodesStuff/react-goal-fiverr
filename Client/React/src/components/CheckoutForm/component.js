import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { APP_SERVER_URL } from '../../config';
import { Redirect, NavLink } from 'react-router-dom';
import { updateCreditBalance } from '../../actions/userActions';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      complete: false
    }
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
      <Redirect to="/" />
      console.log('Update credit balance');
      this.props.updateCreditBalance(20);
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
        <p>Would you like to add 20 credits to your account?</p>
        <CardElement />
        <button onClick={this.submit}>Submit Payment</button>

        {/* <div class="form-row">
          <label for="card-element">
            Credit or debit card
          </label>
          <div id="card-element">
            <CardElement />
          </div>

          
          <div id="card-errors" role="alert"></div>
        </div>

        <button onClick={this.submit}>Submit Payment</button> */}
        
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

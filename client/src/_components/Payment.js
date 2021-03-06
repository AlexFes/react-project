import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../_actions/actions'

class Payment extends Component {
    render() {
        return (
            <StripeCheckout
                name='Оплата'
                description=''
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className='btn btn-primary mt-5 ml-5'>
                    Перейти к оплате
                </button>

            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payment);
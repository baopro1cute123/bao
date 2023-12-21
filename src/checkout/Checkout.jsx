import React from 'react'
import CheckoutAd from './CheckoutAd'
import ListCheckout from './ListCheckout'
import Payment from './Payment'
import "./Checkout.css"
const Checkout = () => {
  return (
    <div className='checkout'>
    <div className='addresscheckout'>
    <CheckoutAd/>
    </div>
    <div className='listcheckout'>
    <ListCheckout/>
    </div>
    <div className='payment'>
    <Payment/>
    </div>
    </div>
    
  )
}

export default Checkout
// Checkout.js
import React from "react";
import "./Checkout.css";
import MoMoCheckout from "./MoMoCheckout";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2 className="h2-checkout">Trang Thanh Toán</h2>

        <form className="form-checkout">
          <div className="form-group">
            <label className="lable-checkout" htmlFor="name">Họ và tên</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label className="lable-checkout" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label className="lable-checkout" htmlFor="address">Địa chỉ</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div className="form-group">
            <label className="lable-checkout" htmlFor="city">Thành Phố</label>
            <input type="text" id="city" name="city" required />
          </div>
          <div  className="form-group">
            <label  className="lable-checkout" htmlFor="state">State</label>
            <input type="text" id="state" name="state" required />
          </div>
          <div className="form-group">
            <label className="lable-checkout" htmlFor="zip">Zip Code</label>
            <input type="text" id="zip" name="zip" required />
          </div>
          <div className="form-group">
            <label className="lable-checkout" htmlFor="card">Credit Card Number</label>
            <input type="text" id="card" name="card" required />
          </div>
          <div className="form-group">
            <label className="lable-checkout" htmlFor="expiry">Expiration Date</label>
            <input type="text" id="expiry" name="expiry" required />
          </div>
          <div className="form-group">
            <label className="lable-checkout" htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" required />
          </div>
          <button type="submit">Place Order</button>
        </form>
      </div>
      <div className="momo-checkout">
      <MoMoCheckout/>
      </div>
    </div>
  );
};

export default Checkout;

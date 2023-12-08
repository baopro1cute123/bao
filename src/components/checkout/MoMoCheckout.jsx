// MoMoCheckout.js
import React, { useState } from "react";

const MoMoCheckout = () => {
  const [paymentAmount, setPaymentAmount] = useState("");

  const handlePayment = () => {
    // Gọi API MoMo để tạo đơn hàng và chuyển hướng người dùng đến cổng thanh toán
    const momoApiUrl = "https://api.momo.vn/v1/gateway";
    const momoApiKey = "YOUR_MOMO_API_KEY";
    const momoPartnerCode = "YOUR_MOMO_PARTNER_CODE";

    // Tạo request để gọi API MoMo
    const request = {
      partnerCode: momoPartnerCode,
      accessKey: momoApiKey,
      requestType: "captureMoMoWallet",
      requestId: "YOUR_UNIQUE_ORDER_ID",
      amount: paymentAmount,
      orderInfo: "Payment for products",
      returnUrl: "YOUR_RETURN_URL",
      notifyUrl: "YOUR_NOTIFY_URL",
      extraData: "YOUR_EXTRA_DATA",
    };

    // Gửi request đến API MoMo
    fetch(momoApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((data) => {
        // Chuyển hướng người dùng đến cổng thanh toán MoMo
        window.location.href = data.payUrl;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="momo-checkout-container">
      <div className="momo-checkout-form">
        <h2>MoMo Checkout</h2>
        <form>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              required
            />
          </div>
          <button type="button" onClick={handlePayment}>
            Pay with MoMo
          </button>
        </form>
      </div>
    </div>
  );
};

export default MoMoCheckout;

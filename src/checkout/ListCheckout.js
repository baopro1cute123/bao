import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ListCheckout = () => {
  const history = useHistory();

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10.0, quantity: 2, size: "M", image: "shop.png", business: "Business 1" },
    { id: 2, name: "Product 2", price: 15.0, quantity: 1, size: "L", image: "shop.png", business: "Business 2" },
    { id: 4, name: "Product 3", price: 10.0, quantity: 2, size: "S", image: "shop.png", business: "Business 3" },
    // Add more items as needed
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    history.push("/checkout");
  };
  const [message, setMessage] = useState('');
  const [shippingProvider, setShippingProvider] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'message') {
      setMessage(value);
    } else if (name === 'shippingProvider') {
      setShippingProvider(value);
    }
  };

  return (
    <div className="listCheckout">
      {cartItems.map((item) => (
        <div key={item.id} className="listCheckout-table">
          <table>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                    <h4>{item.business}</h4>
                    <div className="info-listcheck">
                  <img src={item.image} alt='' style={{ width: "50px", height: "50px" }} />
                  <p>{item.name}</p>
                  <p>Loại: {item.size}</p>
                  </div>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <div className="ship-listcheckout">
      <p>Lời nhắn</p>
      <input
        type="text"
        name="message"
        value={message}
        onChange={handleInputChange}
      />
      <p>Đơn vị vận chuyển</p>
      <select
        name="shippingProvider"
        value={shippingProvider}
        onChange={handleInputChange}
      >
        <option value="">Chọn đơn vị vận chuyển</option>
        <option value="shipping1">Đơn vị vận chuyển 1</option>
        <option value="shipping2">Đơn vị vận chuyển 2</option>
      </select>
    </div>
          <div className="total-listCheckout">
        <h4>Tổng cộng: ${getTotalPrice().toFixed(2)}</h4>
      </div>
        </div>
      ))}
      
    </div>
  );
};

export default ListCheckout;

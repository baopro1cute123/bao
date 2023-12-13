// NewCart.js

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./NewCart.css";

const NewCart = () => {
  const history = useHistory();

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10.0, quantity: 2, image: "/path/to/product1.jpg" },
    { id: 2, name: "Product 2", price: 15.0, quantity: 1, image: "/path/to/product2.jpg" },
    { id: 4, name: "Product 3", price: 10.0, quantity: 2, image: "/path/to/product3.jpg" },
    { id: 5, name: "Product 3", price: 10.0, quantity: 2, image: "/path/to/product3.jpg" },

    { id: 6, name: "Product 3", price: 10.0, quantity: 2, image: "/path/to/product3.jpg" },

    { id: 7, name: "Product 3", price: 10.0, quantity: 2, image: "/path/to/product3.jpg" },

    { id: 8, name: "Product 3", price: 10.0, quantity: 2, image: "/path/to/product3.jpg" },
    { id: 9, name: "Product 3", price: 10.0, quantity: 2, image: "/path/to/product3.jpg" },

    // Add more items as needed
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleCheckout = () => {
    history.push("/checkout");
  };
  return (
    <div className="cartitem">
      <h2>Giỏ hàng của bạn</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tổng cộng</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px" }} />
              </td>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button className="deletecart" onClick={() => removeFromCart(item.id)}>
                  Xóa
                </button>
                <button className="increa" onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
                <button className="decrea" onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-cart">
        <h3>Tổng cộng: ${getTotalPrice().toFixed(2)}</h3>
        <button onClick={handleCheckout}>Thanh toán</button>
      </div>
    </div>
  );
};

export default NewCart;

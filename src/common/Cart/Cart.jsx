import React, { useState } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const [checkedItems, setCheckedItems] = useState(
    CartItem.map(() => false)
  );
  const history = useHistory();

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const totalPrice = CartItem.reduce(
    (price, item, index) => (checkedItems[index] ? price + item.qty * item.price : price),
    0
  );

  const handleCheckout = () => {
    const selectedItems = CartItem.filter((item, index) => checkedItems[index]);
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    
    history.push({
      pathname: "/checkout",
      state: { selectedItems: selectedItems }
    });
  };

  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {CartItem.length === 0 && (
              <h1 className="no-items product">Không có sản phẩm trong giỏ hàng</h1>
            )}

            {CartItem.map((item, index) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id={`checkbox-${item.id}`}
                      checked={checkedItems[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </div>
                  <div className="img">
                    {item.imageSet && <img src={item.cover || item.imageSet[0].url} alt="" />}
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="cartControl d_flex">
                      <button className="incCart" onClick={() => addToCart(item)}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button className="desCart" onClick={() => decreaseQty(item)}>
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product">
            <h2>Thanh toán giỏ hàng</h2>
            <div className="d_flex">
              <h4>Tổng tiền :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
            {CartItem.length > 0 && (
              <button className="payButton" onClick={handleCheckout}>
                Thanh toán
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

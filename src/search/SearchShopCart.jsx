import React from "react"
import ShopData from "./ShopData"
import { useHistory } from "react-router-dom";

import logo from './shop.png'
const SearchShopCart = () => {
  const history = useHistory();

  const redirectToShopPage = () => {
    // Chuyển hướng đến trang shop, bạn cần điều chỉnh đường dẫn tương ứng
    history.push("/product");
  };
  return (
    
    <>
    <div className="SearchShopCart">
    
      <div className='content grid product'>
      <div className="shopsearch">
      <img className="imgsearchshopcart" src={logo} alt="Shop" />
      <div className="shopinfo">
        <h2>Shop Name</h2>
        <div className="ratingfl">
        <div className="rating">Rating: 4.5</div>
        <div className="followers">Followers: 1000</div>
        </div>
        <button className="view-button" onClick={redirectToShopPage}>View Shop</button>
      </div>
      </div>
        {ShopData.map((val, index) => {
          return (
            
            <div className='box' key={index}>
              <div>
              </div>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          )
        })}
      </div>
      </div>
    </>
  )
}

export default SearchShopCart

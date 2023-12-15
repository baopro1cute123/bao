import React from "react";
import Catg from "../product/Catg";
import Sortproduct from "../product/Sortproduct";
import ProductCart from "../product/ProductCart";

const shopItems = [
    
    {
      id: 1,
      name: "Product 1",
      discount: 10,
      imageSet: [
        { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
        { url: "https://example.com/image2.jpg" },
        // Add more images if needed
      ],
      price: 100000,
    },
    {
      id: 2,
      name: "Product 2",
      discount: 15,
      imageSet: [
        { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
        { url: "https://example.com/image4.jpg" },
        // Add more images if needed
      ],
      price: 150000,
    },
    {
        id: 3,
        name: "Product 2",
        discount: 15,
        imageSet: [
          { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
          { url: "https://example.com/image4.jpg" },
        ],
        price: 150000,
      },
      {
        id: 3,
        name: "Product 2",
        discount: 15,
        imageSet: [
          { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
          { url: "https://example.com/image4.jpg" },
        ],
        price: 150000,
      },
      {
        id: 3,
        name: "Product 2",
        discount: 15,
        imageSet: [
          { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
          { url: "https://example.com/image4.jpg" },
        ],
        price: 150000,
      },
      {
        id: 3,
        name: "Product 2",
        discount: 15,
        imageSet: [
          { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
          { url: "https://example.com/image4.jpg" },
        ],
        price: 150000,
      },
      {
        id: 3,
        name: "Product 2",
        discount: 15,
        imageSet: [
          { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
          { url: "https://example.com/image4.jpg" },
        ],
        price: 150000,
      },
      {
        id: 3,
        name: "Product 2",
        discount: 15,
        imageSet: [
          { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
          { url: "https://example.com/image4.jpg" },
        ],
        price: 150000,
      },
      {
        id: 3,
        name: "Product 2",
        discount: 15,
        imageSet: [
          { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
          { url: "https://example.com/image4.jpg" },
        ],
        price: 150000,
      },
      {
        id: 3,
        name: "Product 2",
        discount: 15,
        imageSet: [
          { url: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/22/873088/Ronaldo1.jpg" },
          { url: "https://example.com/image4.jpg" },
        ],
        price: 150000,
      },
      
      
  ];

const Product = ({ addToCart, apiCate }) => {
 
  return (
    <>
      <section className="shop background">
       

        <div className="container d_flex">
          <Catg shopItems={shopItems} apiCate={apiCate} />

          <div className="contentWidth">
            <div className="heading d_flex">
              <Sortproduct />
            </div>
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <h2>SẢN PHẨM CỦA SHOP</h2>
              </div>
              <div className="heading-right row">
                <span>Xem tất cả</span>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content grid1">
              <ProductCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

import React from "react"
import Catg from "./Catg"
import ProductCart from "./ProductCart";
const Product = ({ addToCart, shopItems, apiCate }) => {
    return (
        <>
            <section className='shop background'>
                <div className='container d_flex'>
                    <Catg shopItems={shopItems} apiCate={apiCate} />

                    <div className='contentWidth'>
                        <div className='heading d_flex'>
                            <div className='heading-left row  f_flex'>
                                <h2>SẢN PHẨM</h2>
                            </div>
                            <div className='heading-right row '>
                                <span>Xem tất cả</span>
                                <i className='fa-solid fa-caret-right'></i>
                            </div>
                        </div>
                        <div className='product-content  grid1'>
                            <ProductCart addToCart={addToCart} shopItems={shopItems} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;

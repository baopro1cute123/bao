import React from "react"
import Catg from "./Catg"
import ProductCart from "./ProductCart";
import Hproduct from "./Hproduct";
import Tips from "./tips/Tips";
import Sortproduct from "./Sortproduct";
const Product = ({ addToCart, shopItems, apiCate }) => {
    return (
        <>
            <section className='shop background'>
                <div >
                    <Hproduct />
                </div>
                <div>
                    <Tips />
                </div>

                <div className='container d_flex'>
                    <Catg shopItems={shopItems} apiCate={apiCate} />

                    <div className='contentWidth'>
                        <div className='heading d_flex'>
                            <Sortproduct />
                        </div>
                        <div className='heading d_flex'>
                            <div className='heading-left row  f_flex'>
                                <h2>SẢN PHẨM CỦA SHOP</h2>
                            </div>
                            <div className='heading-right row '>
                                <span>Xem tất cả</span>
                                <i className='fa-solid fa-caret-right'></i>
                            </div>
                        </div>
                        <div className='product-content  grid1'>
                            <ProductCart addToCart={addToCart} shopItems={shopItems} />
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;

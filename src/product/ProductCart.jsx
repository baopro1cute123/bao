import React, { useEffect, useState } from "react"
import { productApi } from "../services/UserService";


const ProductCart = ({ shopItems, addToCart }) => {
    const [count, setCount] = useState(0)
    const [ListProduct, setListProduct] = useState([]);
    const increment = () => {
        setCount(count + 1)
    }
    const getProducts = async () => {
        let res = await productApi();
        console.log("adadsd", res)
        // if (res && res.data) {
        //     console.log(res);
        //     setTotalUsers(res.total)
        //     setLisUsers(res.data)//phan trang
        //     setTotalPages(res.total_pages);//phan trang

        // }
    }
    useEffect(() => {
        getProducts();
    }, [])
    // "name": "string",
    // "detail": "string",
    // "price": 0,
    // "attribute": "string",
    // "brand": "string",
    // "quantity": 0,
    // "id_business": 0,
    // "id_sale": 0,
    // "id_category": 0,
    // "created_at": "2023-11-13T06:59:30.268Z",
    // "updated_at": "2023-11-13T06:59:30.268Z",
    // "state": 3,
    // "id_imageSet": [
    //   0
    // ]
    return (
        <>
            {/* {shopItems.map((shopItems, index) => { */}
            {ListProduct.map((item, index) => {
                return (
                    <div className='box'>
                        <div className='product mtop'>
                            <div className='img'>
                                <span className='discount'>{item.discount}% Off</span>
                                <img src={item.id_imageSet} alt='' />
                                <div className='product-like'>
                                    <label>{count}</label> <br />
                                    <i className='fa-regular fa-heart' onClick={increment}></i>
                                </div>
                            </div>
                            <div className='product-details'>
                                <h3>{item.name}</h3>
                                <div className='rate'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </div>
                                <div className='price'>
                                    <h4>${item.price}.00 </h4>
                                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                                    <button onClick={() => addToCart(item)}>
                                        <i className='fa fa-plus'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ProductCart

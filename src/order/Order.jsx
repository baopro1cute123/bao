import React, { useState } from 'react';
import "./Order.css"
import MenuProfile from "../profile/MenuProfile";
import MyOrder from "./MyOrder";
const Order = ({ }) => {
    const [orders] = useState([
        {
            id: 1,
            date: '2023-11-26',
            items: [
                {
                    id: 1, name: 'Giày thể thao đá bóng', quantity: 2, price: 10, 
                    img: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/30/969136/Cristiano-Ronaldo4.jpg', size: "XL",
                    detail: "giày nam số một thị trường dành cho nhưng cầu thủ, sử dụng cho môi trường làm việc với công suất lớn "
                },
                {
                    id: 2, name: 'Giày thể thao đá bóng', quantity: 1, price: 20, img: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/30/969136/Cristiano-Ronaldo4.jpg', size: "XL",
                    detail: "giày nam số một thị trường dành cho nhưng cầu thủ, sử dụng cho môi trường làm việc với công suất lớn "
                },
                // Add more items
            ],
            total: 50,
            state: "Đang giao hàng"
        },
        {
            id: 1,
            date: '2023-11-26',
            items: [
                {
                    id: 1, name: 'Giày thể thao đá bóng', quantity: 2, price: 10, img: 'logo.png', size: "XL",
                    detail: "giày nam số một thị trường dành cho nhưng cầu thủ, sử dụng cho môi trường làm việc với công suất lớn "
                },
                {
                    id: 2, name: 'Giày thể thao đá bóng', quantity: 1, price: 20, img: 'logo.png', size: "XL",
                    detail: "giày nam số một thị trường dành cho nhưng cầu thủ, sử dụng cho môi trường làm việc với công suất lớn "
                },
                // Add more items
            ],
            total: 50,
            state: "Đang giao hàng"
        },
        {
            id: 1,
            date: '2023-11-26',
            items: [
                {
                    id: 1, name: 'Giày thể thao đá bóng', quantity: 2, price: 10, img: 'logo.png', size: "XL",
                    detail: "giày nam số một thị trường dành cho nhưng cầu thủ, sử dụng cho môi trường làm việc với công suất lớn "
                },
                {
                    id: 2, name: 'Giày thể thao đá bóng', quantity: 1, price: 20, img: 'logo.png', size: "XL",
                    detail: "giày nam số một thị trường dành cho nhưng cầu thủ, sử dụng cho môi trường làm việc với công suất lớn "
                },
                // Add more items
            ],
            total: 50,
            state: "Đang giao hàng"
        },
        // Add more orders
    ]);
    return (

        <>
            <section className='shop background'>
                <div className='container d_flex'>
                    <MenuProfile></MenuProfile>
                    <div className='contentWidth'>

                        <div className='heading d_flex'>
                            <div className='heading-left row  f_flex'>
                                <h2>ĐƠN HÀNG CỦA TÔI</h2>
                            </div>

                        </div>
                        <div >
                            <MyOrder orders={orders} />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Order;

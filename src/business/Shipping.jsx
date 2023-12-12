import React, { useState } from 'react';

const Shipping = () => {
    const [trackingInfo, setTrackingInfo] = useState([
        {
            name_product: "giày",
            img: "track1.png",
            total: '30,000 VND',
            orderNumber: '123456',
            status: 'Đã giao hàng',
            location: 'Đang vận chuyển',
            estimatedDelivery: '10 Tháng 12, 2023',
        },
        {
            name_product: "áo",
            img: "track2.png",
            total: '50,000 VND',
            orderNumber: '789012',
            status: 'Chưa giao hàng',
            location: 'Chưa vận chuyển',
            estimatedDelivery: '15 Tháng 12, 2023',
        },
    ]);

    return (
        <div className="track-container">
            <h1>QUẢN LÝ VẬN CHUYỂN</h1>
            <div className="tracking-header">
                <div>Mã đơn hàng</div>
                <div>Tên sản phẩm</div>
                <div>Hình ảnh</div>
                <div>Giá tiền</div>
                <div>Trạng thái</div>
                <div>Địa chỉ nhận hàng</div>
                <div>Dự kiến giao hàng</div>

            </div>

            {trackingInfo.map((product, index) => (
                <div className="tracking-info" key={index}>
                    <div>{product.name_product}</div>
                    <div>{product.orderNumber}</div>
                    <div>
                        <img src={product.img} alt={`Product ${index + 1}`} />
                    </div>
                    <div>{product.total}</div>
                    <div>{product.status}</div>
                    <div>{product.estimatedDelivery}</div>
                    <div>{product.estimatedDelivery}</div>

                </div>
            ))}
        </div>
    );
};

export default Shipping;

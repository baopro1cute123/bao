// Track.jsx

import React, { useState } from 'react';

const TrackAdmin = () => {
    const [trackingInfo, setTrackingInfo] = useState([]);
    const handleTrack = () => {

    }
    const handleTrackSubmit = (event) => {
        event.preventDefault();
        // In a real application, you would fetch tracking information from a server
        // For now, let's simulate it with some hardcoded data for two orders
        const fakeTrackingInfo1 = {
            name_product: "giày",
            img: "track1.png",
            total: '30,000 VND',
            orderNumber: '123456',
            status: 'Đã giao hàng',
            location: 'Đang vận chuyển',
            estimatedDelivery: '10 Tháng 12, 2023',
        };

        const fakeTrackingInfo2 = {
            name_product: "áo",
            img: "track2.png",
            total: '50,000 VND',
            orderNumber: '789012',
            status: 'Chưa giao hàng',
            location: 'Đang xác nhận đơn hàng',
            estimatedDelivery: '15 Tháng 12, 2023',
        };

        setTrackingInfo([fakeTrackingInfo1, fakeTrackingInfo2]);
    };

    return (
        <div className="track-container">
            <h2>Theo dõi đơn hàng</h2>
            <p>Nhập số theo dõi đơn hàng để kiểm tra trạng thái:</p>
            <form onSubmit={handleTrackSubmit}>
                <label htmlFor="trackingNumber">Mã đơn hàng:</label>
                <input type="text" id="trackingNumber" name="trackingNumber" />
                <button type="submit">Kiểm tra</button>
            </form>

            <div className="tracking-header">
                <div>Mã Đơn hàng</div>
                <div>Tên sản phẩm</div>
                <div>Hình ảnh</div>
                <div>Tổng giá trị</div>
                <div>Trạng thái</div>
                <div>Giao hàng dự kiến</div>
                <div>Action</div>

            </div>

            {trackingInfo.map((order, index) => (
                <div className="tracking-info" key={index}>
                    <div>{order.orderNumber}</div>
                    <div>{order.name_product}</div>
                    <div><img src={order.img} alt={`Tracking ${index + 1}`} /></div>
                    <div>{order.total}</div>
                    <div>{order.status}</div>
                    <div>{order.estimatedDelivery}</div>
                    <div><button onClick={() => handleTrack()}>XÁC NHẬN</button></div>
                </div>
            ))}
        </div>
    );
};

export default TrackAdmin;

import React, { useState } from 'react';

const Track = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [deliveryStatus, setDeliveryStatus] = useState('');

    // Hàm xử lý khi người dùng tìm kiếm đơn hàng
    const handleTrackOrder = (e) => {
        e.preventDefault();
        // Gọi API hoặc service để kiểm tra tình trạng vận chuyển
        // Ví dụ: const status = await trackOrder(trackingNumber);
        // setDeliveryStatus(status); // Cập nhật trạng thái vận chuyển
        // Mô phỏng dữ liệu
        setDeliveryStatus('Đang vận chuyển');
    };

    return (
        <div className="track-order">
            <h2>Theo dõi đơn hàng</h2>
            <form onSubmit={handleTrackOrder}>
                <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Nhập mã vận đơn"
                />
                <button type="submit">Tìm kiếm</button>
            </form>
            {deliveryStatus && (
                <div className="delivery-status">
                    <h3>Trạng thái vận chuyển:</h3>
                    <p>{deliveryStatus}</p>
                </div>
            )}
        </div>
    );
};

export default Track;

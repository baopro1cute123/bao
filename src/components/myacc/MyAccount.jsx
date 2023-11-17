import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css';

const MyAccount = () => {
    return (
        <div className="account-container">
            <h2>Tài khoản của tôi</h2>
            <div className="account-details">
                <div className="profile-info">
                    <h3>Thông tin cá nhân</h3>
                    <p>Họ và tên: John Doe</p>
                    <p>Email: johndoe@example.com</p>
                    <p>Địa chỉ: 123 ABC Street, XYZ City</p>
                    <Link to="/edit-profile">Chỉnh sửa thông tin</Link>
                </div>
                <div className="order-history">
                    <h3>Lịch sử đơn hàng</h3>
                    <p>Bạn đã có 5 đơn hàng</p>
                    <Link to="/order-history">Xem chi tiết</Link>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;

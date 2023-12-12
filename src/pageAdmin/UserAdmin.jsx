import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const UserAdmin = () => {
    const history = useHistory();
    const [trackingInfo, setTrackingInfo] = useState([
        {
            username: "giày",
            img: "track1.png",
            email: 'dut@gmail.com',
            name: 'Nguyễn Văn A',
            password: '12345',
        },
        {
            username: "giày",
            img: "track1.png",
            email: 'dut@gmail.com',
            name: 'Nguyễn Văn A',
            password: '12345',
        },
        {
            username: "giày",
            img: "track1.png",
            email: 'dut@gmail.com',
            name: 'Nguyễn Văn A',
            password: '12345',
        },

    ]);
    const hanhdlenewproduct = () => {

        history.push('/new-product');
    };
    const handleEitUser = () => {

    }
    const handleDeleteUser = () => {

    }
    const handleSearchChange = () => {

    }

    return (
        <div className="track-container">
            <h2>Quản lý User</h2>
            <button type="submit" onClick={hanhdlenewproduct}>Thêm sản phẩm</button>
            <p>Tìm kiếm người dùng</p>
            <input
                type="text"
                placeholder="Search..."
                onChange={handleSearchChange}
            />
            <div className="tracking-header">
                <div>Username</div>
                <div>Hình ảnh</div>
                <div>Email</div>
                <div>Họ và tên</div>
                <div>Mật khẩu</div>
                <div>Địa chỉ</div>
                <div>Action</div>
            </div>

            {trackingInfo.map((product, index) => (
                <div className="tracking-info" key={index}>
                    <div>{product.username}</div>
                    <div><img src={product.img} alt={`Product ${index + 1}`} /></div>
                    <div>
                        {product.email}
                    </div>
                    <div>{product.name}</div>
                    <div>{product.password}</div>
                    <div>{product.password}</div>

                    <div> <button className='edit' onClick={() => handleEitUser()}>Edit</button>
                        <button className='delete' onClick={() => handleDeleteUser()}>Delete</button></div>

                </div>
            ))}
        </div>
    );
};

export default UserAdmin;

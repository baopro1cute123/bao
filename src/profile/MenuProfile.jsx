import React from 'react';
import { Link } from 'react-router-dom';

import './Profile.css'; // Import file CSS

const MenuProfile = () => {
    return (
        <>
            <div className='category'>
                <div className="menu-profile">
                    <h3>Nguyễn Bảo</h3>

                    <label><Link to="/account"> 👤Tài khoản</Link></label>
                    <ul>
                        <li><Link to="/myacc"> 👤Hồ sơ</Link></li>
                        <li><Link to="/myacc"> 💳Ngân Hàng</Link></li>
                        <li><Link to="/track">📍Địa chỉ</Link></li>
                        <li><Link to="/account/settings">🔒Đổi mật khẩu</Link></li>
                        <li><Link to="/account/settings">🔔Thông báo</Link></li>
                    </ul>
                    <label className='lableprofile'><Link to="/account">🔔Đơn hàng</Link></label>
                    <label className='lableprofile'><Link to="/account">🔔Liên Hệ</Link></label>

                    <label className='lableprofile'><Link to="/account">🔔Cài đặt</Link></label>


                </div>
            </div>
        </>
    );
};

export default MenuProfile;

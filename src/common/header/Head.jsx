import React from "react";
import { Link } from "react-router-dom";
import './head.css';

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>

            <label><Link to='/business'>📧 Kênh người bán</Link></label>

            <label><Link to='/admin'>📧 Kênh Admin</Link></label>
          </div>
          <div className='right row RText'>
            📢
            <label>Thông báo</label>

            <label><Link to='/contact'>📧 Liên hệ</Link></label>
            <label><Link to="/login">Đăng nhập</Link></label>
            <label><Link to="/register">Đăng ký</Link></label>

            {/* Account Menu */}
            <div className="account-menu">
              <label><Link to="/account">👤 Tài khoản</Link></label>
              <ul>
                <li><Link to="/profile">👤 Hồ sơ của tôi</Link></li>
                <li><Link to="/order">🛒 Đơn hàng</Link></li>
                <li><Link to="/account/settings">🚪 Đăng xuất</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;

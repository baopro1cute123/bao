import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import "./Business.css"
const MenuBusiness = () => {
    return (
        <>
            <div className='category'>
                <div className="menu-business">
                    <label><Link to="/account"> Vận chuyển</Link></label>
                    <ul>
                        <li><Link to="/myacc"> Quản lý </Link></li>
                        <li><Link to="/myacc"> Trạng thái </Link></li>
                        <li><Link to="/track">Cài đặt </Link></li>
                    </ul>
                </div>
                <div className="menu-business">

                    <label><Link to="/account">Quản lý đơn hàng</Link></label>
                    <ul>
                        <li><Link to="/myacc"> Tất cả </Link></li>
                        <li><Link to="/myacc"> Đơn hủy</Link></li>
                        <li><Link to="/track">Trả Hàng</Link></li>
                    </ul>
                </div>
                <div className="menu-business">
                    <label><Link to="/account"> Quản lý sản phẩm</Link></label>
                    <ul>
                        <li><Link to="/myacc"> Tất cả sản phẩm</Link></li>
                        <li><Link to="/myacc"> Thêm sản phẩm</Link></li>
                        <li><Link to="/track">Sản phẩm vi phạm</Link></li>
                    </ul>

                </div>
                <div className="menu-business">
                    <label><Link to="/account"> Doanh thu</Link></label>
                    <ul>
                        <li><Link to="/myacc"> Số dư tài khoản</Link></li>
                        <li><Link to="/myacc"> Cài đặt tài khoản</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MenuBusiness
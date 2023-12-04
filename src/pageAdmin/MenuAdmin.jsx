import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
const MenuAdmin = () => {
    return (
        <>
            <div className='menu-admin'>
                <div className="menu-business">

                    <label><Link to="/account">Dashboard</Link></label>

                </div>
                <div className="menu-business">

                    <label><Link to="/account">Quản lý người dùng</Link></label>

                </div>
                <div className="menu-business">
                    <label><Link to="/account"> Quản lý Vận chuyển</Link></label>

                </div>
                <div className="menu-business">

                    <label><Link to="/account">Quản lý đơn hàng</Link></label>

                </div>
                <div className="menu-business">
                    <label><Link to="/account"> Quản lý sản phẩm</Link></label>

                </div>
                <div className="menu-business">
                    <label><Link to="/account"> Doanh thu</Link></label>
                </div>
                <div className="menu-business">
                    <label><Link to="/account">Cài đặt</Link></label>
                </div>

            </div>
        </>
    )
}

export default MenuAdmin
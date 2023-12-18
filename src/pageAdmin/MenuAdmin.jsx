import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
const MenuAdmin = () => {
    return (
        <>
            <div className='menu-admin'>
                <div className="menu-business">

                    <label><Link to="/dashboard">Dashboard</Link></label>

                </div>
                <div className="menu-business">

                    <label><Link to="/adminuser">Quản lý người dùng</Link></label>

                </div>
                <div className="menu-business">
                    <label><Link to="/adminship"> Quản lý Vận chuyển</Link></label>

                </div>
                <div className="menu-business">

                    <label><Link to="/admintrack">Quản lý đơn hàng</Link></label>

                </div>
                <div className="menu-business">
                    <label><Link to="/adminproduct"> Quản lý sản phẩm</Link></label>

                </div>
                <div className="menu-business">
                    <label><Link to="/adminrevenue"> Doanh thu</Link></label>
                </div>
             
            </div>
        </>
    )
}

export default MenuAdmin
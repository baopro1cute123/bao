import React from 'react'
import "./Admin.css"
import MenuAdmin from './MenuAdmin'
import RevenueAdmin from './Revenue/RevenueAdmin'
import AdminProduct from './Product/ProductAdmin'
import TrackAdmin from './Track/TrackAdmin'
import ShippingAdmin from './Shipping/ShippingAdmin'
import Dashboard from './Dashboard/Dashboard'
import UserAdmin from './UserAdmin/UserAdmin'

const Admin = () => {
    return (
        <section className='shop background'>
            <div className='container d_flex'>
                <MenuAdmin />
                <div className='contentWidth'>
                    <div className='heading d_flex'>
                        <div className='heading-left row  f_flex'>
                            <h2>KÊNH ADMIN</h2>
                        </div>
                    </div>
                    <Dashboard/>
                    <UserAdmin/>
                    <ShippingAdmin />
                    <TrackAdmin />
                    <AdminProduct />
                    <RevenueAdmin />
                </div>
            </div>
        </section>
    )
}

export default Admin
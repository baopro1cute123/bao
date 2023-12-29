import React from 'react'
import "../Admin.css"
import MenuAdmin from '../MenuAdmin'
import ShippingAdmin from './SaleAdmin'


const AdminShip = () => {
    return (
        <section className='shop'>
            <div className='d_flex'>
                <MenuAdmin />
                <div className='contentWidth'>
                    
                    <ShippingAdmin/>
                </div>
            </div>
        </section>
    )
}

export default AdminShip
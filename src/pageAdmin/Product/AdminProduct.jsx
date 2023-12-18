import React from 'react'
import "../Admin.css"
import MenuAdmin from '../MenuAdmin'
import ProductAdmin from './ProductAdmin'


const AdminProduct = () => {
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
                    <ProductAdmin/>
                </div>
            </div>
        </section>
    )
}

export default AdminProduct
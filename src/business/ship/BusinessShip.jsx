import React from 'react'
import MenuBusiness from '../MenuBusiness'
import Shipping from './Shipping'
import "../Business.css"

const BusinessShip = () => {
    return (
        <>
            <section className='shop background'>
                <div className='container d_flex'>
                    <MenuBusiness />
                    <div className='contentWidth'>
                        <div className='heading d_flex'>
                        </div>
                        <div className='heading d_flex'>
                            <div className='heading-left row  f_flex'>
                                <h2>KÊNH NGƯỜI BÁN</h2>
                            </div>
                        </div>
                        <Shipping />
                    </div>
                </div>
            </section>
        </>
    )
}

export default BusinessShip
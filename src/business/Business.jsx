import React from 'react'
import MenuBusiness from './MenuBusiness'
import Track from './Track'
import BProduct from './BProduct'
import NewProductPage from './NewProductPage'
import Shipping from './Shipping'

const Business = () => {
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
                        <Track />
                        <BProduct />
                        <NewProductPage />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Business
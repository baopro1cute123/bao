import React from 'react'
import MenuBusiness from '../MenuBusiness'
import Track from './Track'
import "../Business.css"

const BusinessTrack = () => {
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
                        <Track />
                    </div>
                </div>
            </section>
        </>
    )
}

export default BusinessTrack
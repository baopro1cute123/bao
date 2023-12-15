import React from "react"
import MenuProfile from "../profile/MenuProfile";
import ListAdress from "./ListAdress";
import "./Adress.css"
const Adress = () => {
    const singleAddress = {
        name: 'Người Nhận 1',
        phone: '123456789',
        address: '123 ABC Street, City A',
      };
    return (
        <>
            <section className='shop background'>
                <div className='container d_flex'>
                    <MenuProfile />

                    <div className='contentWidth'>

                        <div className='heading d_flex'>
                            <div className='heading-left row  f_flex'>
                                <h2>ĐỊA CHỈ CỦA TÔI</h2>
                            </div>

                        </div>
                        <div className='product-content'>
                            <ListAdress {...singleAddress} />

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Adress;

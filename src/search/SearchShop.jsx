import React from "react"
import SearchShopCart from "./SearchShopCart"
import { useHistory } from "react-router-dom";

const SearchShop = () => {

    const history = useHistory();

    const gotoallShop = () => {
        history.push("/allshop");
    }
    return (
        <>
            <section className='NewArrivals background'>
                <div className='container'>
                    <div className='heading d_flex'>
                        <div className='heading-left row  f_flex'>
                            <h2> SHOP LIÊN QUAN ĐẾN </h2>
                        </div>
                        <div className='heading-right row '>
                            <span onClick={gotoallShop}>Thêm kết quả</span>
                            <i className='fa-solid fa-caret-right'></i>
                        </div>
                    </div>
                    <SearchShopCart />
                </div>
            </section>
        </>
    )
}

export default SearchShop

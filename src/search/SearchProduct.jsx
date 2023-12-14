import React from "react"
import { useState } from "react";
import Sortproduct from "../product/Sortproduct";
import ProductCart from "../product/ProductCart";
import Pagination from "../product/Pagination";

import "./Search.css"
import MenuSearch from "./MenuSearch";
import Tips from "../product/tips/Tips";
import SearchShop from "./SearchShop";
const SearchProduct = ({ addToCart, shopItems, apiCate }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Số trang tổng cộng

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Thực hiện các xử lý khác khi trang thay đổi, ví dụ: gọi API để lấy dữ liệu mới
        console.log(`Đã chuyển đến trang ${pageNumber}`);
    };
    return (
        <>
            <section className='shop background'>
                <div className='container d_flex'>
                    <MenuSearch shopItems={shopItems} apiCate={apiCate} />

                    <div className='contentWidth'>
                    <div className='heading d_flex'>
                            <SearchShop/>
                        </div>
                        <h2>Kết quả tìm kiếm cho từ khóa " "</h2>

                        <div className='heading d_flex'>
                            <Sortproduct/>
                        </div>
                        <div className='heading d_flex'>
                            <div className='heading-left row  f_flex'>
                                <h2>SẢN PHẨM CỦA SHOP</h2>
                            </div>
                            <div className='heading-right row '>
                                <span>Xem tất cả</span>
                                <i className='fa-solid fa-caret-right'></i>
                            </div>
                        </div>
                        <div className='product-content  grid1'>
                            <ProductCart addToCart={addToCart} shopItems={shopItems} />
                        </div>
                        <div >
                            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchProduct;

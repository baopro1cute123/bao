import React, { useState, useEffect } from "react";
import "./catg.css";

const Catg = ({ shopItems, apiCate }) => {

    return (
        <div className='category'>
            <div className="filter-search">
                <h3>DANH MỤC</h3>
            </div>


            <div className="filter-category">
                <h3>SẢN PHẨM</h3>

                <button style={{ color: "black" }} >
                    Hiếu
                </button>
                <button style={{ color: "black" }} >
                    Bảo
                </button>

            </div>



            <div className="filter-clear">
                <button className="btn" >
                    Xóa bộ lọc
                </button>
            </div>
        </div>
    );
};

export default Catg;

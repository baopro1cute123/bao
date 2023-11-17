import React, { useState, useEffect } from "react";
import "./Catg.css";

const Catg = ({ shopItems, apiCate }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [filteredPrices, setFilteredPrices] = useState([]);
    const [rangeValues, setRangeValues] = useState([0, 0]);

    useEffect(() => {
        const uniquePrices = Array.from(new Set(shopItems.map((item) => item.price)));
        setMinPrice(Math.min(...uniquePrices));
        setMaxPrice(Math.max(...uniquePrices));
        setRangeValues([minPrice, maxPrice]);
        setFilteredPrices(uniquePrices);
    }, [shopItems, minPrice, maxPrice]);

    const handlePriceChange = (e) => {
        const [newMinPrice, newMaxPrice] = e.target.value.split(",").map(Number);
        setRangeValues([newMinPrice, newMaxPrice]);
    };

    const handleApplyFilter = () => {
        const filtered = shopItems.filter(
            (item) => item.price >= rangeValues[0] && item.price <= rangeValues[1]
        );

        const uniqueFilteredPrices = Array.from(new Set(filtered.map((item) => item.price)));
        setFilteredPrices(uniqueFilteredPrices);
    };

    const handleCategoryClick = (category) => {
        // Handle category click logic here
    };

    const handleBrandClick = (brand) => {
        // Handle brand click logic here
    };

    const clearFilters = () => {
        // Reset state variables or perform any other actions to clear filters
        setSearchQuery('');
        setRangeValues([minPrice, maxPrice]);
        // Additional logic for clearing other filters
    };

    return (
        <>
            <div className='category'>
                <div className="filter-search">
                    <form>
                        <input
                            type="text"
                            name="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                </div>

                <div className="filter-category">
                    <h3>Phân Loại</h3>
                    {apiCate.map((eachItem, index) => (
                        <button key={index} style={{ color: "black" }} onClick={() => handleCategoryClick(eachItem.name)}>
                            {eachItem.name}
                        </button>
                    ))}
                </div>

                <div className="filter-company">
                    <h3>Thương hiệu</h3>
                    <form action="#">
                        {shopItems.map((eachItem, index) => (
                            <button key={index} style={{ color: "black" }} onClick={() => handleBrandClick(eachItem.brand)}>
                                {eachItem.brand}
                            </button>
                        ))}
                    </form>
                </div>

                <div className="filter_price">
                    <h3>Giá</h3>
                    <p>
                        <input
                            type="range"
                            name="price"
                            min={minPrice}
                            max={maxPrice}
                            step={1}
                            value={`${rangeValues[0]},${rangeValues[1]}`}
                            onChange={handlePriceChange}
                            onMouseUp={handleApplyFilter}
                        />
                        <br />
                        <span>
                            {rangeValues[0]} - {rangeValues[1]}
                        </span>
                    </p>
                    <div>
                        {filteredPrices.map((price, index) => (
                            <button key={index} style={{ color: "black" }}>
                                {price}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="filter-clear">
                    <button className="btn" onClick={clearFilters}>
                        Xóa bộ lọc
                    </button>
                </div>
            </div>
        </>
    );
};

export default Catg;

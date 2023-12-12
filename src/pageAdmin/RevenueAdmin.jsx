
import React, { useState } from 'react';

const RevenueAdmin = () => {
    const [trackingInfo, setTrackingInfo] = useState([
        {
            name_product: "giày",
            img: "track1.png",
            total: '30,000 VND',
            orderNumber: '123456',
            status: 'Đã giao hàng',
            location: 'Đang vận chuyển',
            estimatedDelivery: '10 Tháng 12, 2023',
        },
        {
            name_product: "áo",
            img: "track2.png",
            total: '50,000 VND',
            orderNumber: '789012',
            status: 'Chưa giao hàng',
            location: 'Đang xác nhận đơn hàng',
            estimatedDelivery: '15 Tháng 12, 2023',
        },
    ]);

    const [filterCriteria, setFilterCriteria] = useState('all'); // Default filter criteria
    const [sortedInfo, setSortedInfo] = useState(trackingInfo); // Initial state for sorting

    // Function to handle filtering based on date
    const handleFilter = (criteria) => {
        setFilterCriteria(criteria);

        // Perform filtering based on criteria
        let filteredData = trackingInfo;

        if (criteria === 'day') {
            // Implement logic for filtering by day
            // Example: filteredData = trackingInfo.filter(item => /* your condition for day */);
        } else if (criteria === 'month') {
            // Implement logic for filtering by month
            // Example: filteredData = trackingInfo.filter(item => /* your condition for month */);
        } else if (criteria === 'quarter') {
            // Implement logic for filtering by quarter
            // Example: filteredData = trackingInfo.filter(item => /* your condition for quarter */);
        } else if (criteria === 'year') {
            // Implement logic for filtering by year
            // Example: filteredData = trackingInfo.filter(item => /* your condition for year */);
        }

        // Update sortedInfo with the filtered data
        setSortedInfo(filteredData);
    };

    // Function to handle sorting
    const handleSort = () => {
        // Implement sorting logic for sortedInfo
        // Example: sortedInfo.sort((a, b) => /* your comparison logic for sorting */);
        // Update sortedInfo state
        setSortedInfo([...sortedInfo]);
    };

    return (
        <div className="track-container">
            <h1>DOANH THU</h1>

            {/* Filter options */}
            <div className="filter-options">
                <button className='sort' onClick={() => handleFilter('day')}>Ngày</button>
                <button className='sort' onClick={() => handleFilter('month')}>Tháng</button>
                <button className='sort' onClick={() => handleFilter('quarter')}>Quý</button>
                <button className='sort' onClick={() => handleFilter('year')}>Năm</button>
                <button className='sort' onClick={() => handleFilter('all')}>Tất cả</button>
            </div>

            {/* Sorting button */}
            <button className='sort' onClick={handleSort}>Sắp xếp</button>

            <div className="track-container">
                <h1>DOANH THU</h1>
                <div className="tracking-header">
                    <div>Tên đơn hàng</div>
                    <div>Tên sản phẩm</div>
                    <div>Hình ảnh</div>
                    <div>Giá tiền</div>
                    <div>Trạng thái</div>
                    <div>Địa chỉ nhận hàng</div>
                    <div>Dự kiến giao hàng</div>

                </div>

                {trackingInfo.map((product, index) => (
                    <div className="tracking-info" key={index}>
                        <div>{product.name_product}</div>
                        <div>{product.orderNumber}</div>
                        <div>
                            <img src={product.img} alt={`Product ${index + 1}`} />
                        </div>
                        <div>{product.total}</div>
                        <div>{product.status}</div>
                        <div>{product.estimatedDelivery}</div>
                        <div>{product.estimatedDelivery}</div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default RevenueAdmin;

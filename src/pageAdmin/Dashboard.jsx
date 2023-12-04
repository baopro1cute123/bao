import React, { useState } from 'react';
import BarChart from './BarChart';

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        // You can add additional logic here, such as filtering or searching data based on the input value.
    };

    return (
        <div className="dashboard-container">
            <header>
                <h1>Dashboard</h1>
            </header>
            <p>Tìm kiếm</p>
            {/* Search input */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>

            {/* Placeholder content */}
            <div className="dashboard-content">
                <div className="widget">
                    <h2>KHÁCH HÀNG</h2>
                    {/* Add content for Widget 1 */}
                </div>

                <div className="widget">
                    <h2>SẢN PHẨM</h2>
                    {/* Add content for Widget 2 */}
                </div>
                <div className="widget">
                    <h2>TOTAL SALES</h2>
                    {/* Add content for Widget 2 */}
                </div>
                <div className="widget">
                    <h2>VISITORS</h2>
                    {/* Add content for Widget 2 */}
                </div>
            </div>
            <div>
                {/* <BarChart /> */}
            </div>
        </div>
    );
};

export default Dashboard;

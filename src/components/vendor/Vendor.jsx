import React, { useState, useEffect } from 'react';

const Vendor = () => {
    const [vendors, setVendors] = useState([]);

    // Giả sử rằng bạn có một hàm fetchData() để lấy danh sách các nhà cung cấp từ API
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Gọi API hoặc dịch vụ để lấy danh sách nhà cung cấp
                // const response = await fetch('API_URL');
                // const data = await response.json();
                // setVendors(data); // Cập nhật state với dữ liệu nhà cung cấp từ API
                const sampleData = [
                    { id: 1, name: 'Vendor A' },
                    { id: 2, name: 'Vendor B' },
                    { id: 3, name: 'Vendor C' }
                ];
                setVendors(sampleData); // Mô phỏng dữ liệu nhà cung cấp
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Gọi fetchData khi component được mount
    }, []);

    return (
        <div>
            <h1>Danh sách nhà cung cấp</h1>
            <ul>
                {vendors.map(vendor => (
                    <li key={vendor.id}>{vendor.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Vendor;

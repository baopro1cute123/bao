import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FaMapMarkerAlt } from "react-icons/fa";

const CheckoutAd = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'Nguyễn Văn A',
    phoneNumber: '0123456789',
    address: '123 Đường ABC, Quận XYZ, Thành phố HCM',
  });

  const handleChangeAddress = () => {
    // Implement the logic for changing the address here
    // For example, you can open a modal or navigate to another page for address modification
    console.log('Changing address...');
  };

  return (
    <div className='CheckoutAd'>
      <div className='head-CheckoutAd'>
      <FaMapMarkerAlt /> &nbsp;
        Địa chỉ nhận hàng
      </div>
      <div className='list-CheckoutAd'>
        <p>Tên: {userInfo.name}</p>
        <p>Số điện thoại: {userInfo.phoneNumber}</p>
        <p>Địa chỉ: {userInfo.address}</p>
        <Link >Thay đổi</Link>
        {/* <button onClick={handleChangeAddress}>Thay đổi</button> */}
      </div>
    </div>
  );
};

export default CheckoutAd;

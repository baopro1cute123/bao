// AccountInfo.js
import React from 'react';

const AccountInfo = ({ accountNumber, balance, ownerName }) => {
  return (
    <div className='AccountInfo'>
      <h2>Thông tin tài khoản</h2>
      <p>Số tài khoản: {accountNumber}</p>
      <p>Số dư: {balance}</p>
      <p>Chủ tài khoản: {ownerName}</p>
    </div>
  );
};

export default AccountInfo;

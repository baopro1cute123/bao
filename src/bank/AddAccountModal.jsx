// AddAccountModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const AddAccountModal = ({ isOpen, onRequestClose, onAddAccount }) => {
  const [newAccount, setNewAccount] = useState({
    // Khai báo các trường cần thiết cho tài khoản ngân hàng mới
    // Ví dụ:
    accountNumber: '',
    balance: 0,
    ownerName: '',
  });

  const handleChange = (e) => {
    setNewAccount({
      ...newAccount,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    onAddAccount(newAccount);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Account Modal"
    >
      <h2>Thêm tài khoản ngân hàng</h2>
      <label>
        Số tài khoản:&nbsp;
        <input
          type="text"
          className='modalinput'          value={newAccount.accountNumber}
          onChange={handleChange}
        />
      </label>&nbsp;
      <label>
        Số dư:&nbsp;
        <input
          type="number"
          className='modalinput'          value={newAccount.balance}
          onChange={handleChange}
        />
      </label>&nbsp;
      <label>
        Tên chủ tài khoản:&nbsp;
        <input
          type="text"
          className='modalinput'          
          value={newAccount.ownerName}
          onChange={handleChange}
        />
      </label>&nbsp;&nbsp;
      <button className="add-address-button" onClick={handleAdd}>Thêm tài khoản</button>
    </Modal>
  );
};

export default AddAccountModal;

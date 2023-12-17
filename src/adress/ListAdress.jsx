import React from 'react';

const ListAddress = ({ addresses }) => {
  const handleUpdate = (name) => {
    console.log(`Đã cập nhật địa chỉ: ${name}`);
    // Implement your update logic here
  };

  const handleDelete = (name) => {
    console.log(`Đã xóa địa chỉ: ${name}`);
    // Implement your delete logic here
  };

  const handleSetDefault = (name) => {
    console.log(`Đã thiết lập mặc định cho địa chỉ: ${name}`);
    // Implement your set default logic here
  };

  return (
    <>
      {addresses.map((address, index) => (
        <div key={index} className='adressprofile'>
          <div className='adress'>
            <div className='adressname'>
              <p>{address.name}</p> &nbsp;&nbsp;&nbsp;&nbsp;
              <p>{address.phone}</p>
            </div>
            <div className='adressadress'>
              <p>{address.address}</p>
            </div>
          </div>
          <div className='address-actions'>
            <button onClick={() => handleUpdate(address.name)}>Cập nhật</button>
            <button onClick={() => handleDelete(address.name)}>Xóa</button>
            <button onClick={() => handleSetDefault(address.name)}>Thiết lập mặc định</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListAddress;

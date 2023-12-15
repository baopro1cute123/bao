import React from 'react';

const ListAddress = ({ name, phone, address }) => {
  return (
    <div className='adressprofile'>
      <div className='adress'>
        <div className='adressname'>
          <p>{name}</p>
          <p>{phone}</p>
        </div>
        <div className='adressadress'>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default ListAddress;

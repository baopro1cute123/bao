import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const BProduct = () => {
  const history = useHistory();
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
  const hanhdlenewproduct = () => {

    history.push('/new-product');
  };
  const handleEitProduct = () => {
    history.push('/editp');
  }
  const handleDeleteProduct = () => {

  }

  return (
    <div className="track-container">
      <h2>Quản lý sản phẩm</h2>
      <button type="submit" onClick={hanhdlenewproduct}>Thêm sản phẩm</button>
      <div className="tracking-header">
        <div>Tên sản phẩm</div>
        <div>Phân loại</div>
        <div>Hình ảnh</div>
        <div>Giá tiền</div>
        <div>Mô tả sản phẩm</div>
        <div>Ngày giao hàng</div>
        <div>Action</div>


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
          <div> <button className='edit' onClick={() => handleEitProduct()}>Edit</button>
            <button className="delete" onClick={() => handleDeleteProduct()}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BProduct;

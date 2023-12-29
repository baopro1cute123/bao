import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ViewSaleAdmin = () => {
  const location = useLocation();
  const { eventCode } = useParams();

  const [products] = useState([
    {
      id: 1,
      name_product: 'Giày',
      img: 'track1.png',
      price: '30,000 VND',
      business: 'AB',
      size: 'M',
      detail: 'giày bóng đá',
    },
    {
      id: 2,
      name_product: 'Giày',
      img: 'track1.png',
      price: '30,000 VND',
      business: 'AB',
      size: 'M',
      detail: 'giày bóng đá',
    },
    // Add more products as needed
    {
      id: 3,
      name_product: 'Giày',
      img: 'track1.png',
      price: '30,000 VND',
      business: 'AB',
      size: 'M',
      detail: 'giày bóng đá',
    },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddProduct = (productId) => {
    // Check if the product is already selected
    const isProductSelected = selectedProducts.some(
      (product) => product.id === productId
    );

    if (!isProductSelected) {
      const selectedProduct = products.find((product) => product.id === productId);

      if (selectedProduct) {
        setSelectedProducts((prevSelectedProducts) => [
          ...prevSelectedProducts,
          selectedProduct,
        ]);
      }
    }
  };

  const handleRemoveProduct = (productId) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.filter((product) => product.id !== productId)
    );
  };

  if (!location.state || !location.state.eventInfo) {
    return <p>No data available</p>;
  }

  const eventInfo = location.state.eventInfo;

  return (
    <div className='viewsaleadmin'>
    <div className='detailsale'>
      <h2>View Sale Event Details</h2>
      <p>Mã sự kiện: {eventInfo.eventCode}</p>
      <p>Tên sự kiện: {eventInfo.eventName}</p>
      <p>Giảm giá: {eventInfo.discount}</p>
      <p>Từ ngày: {eventInfo.fromDate}</p>
      <p>Đến ngày: {eventInfo.toDate}</p>
      <img src={eventInfo.img} alt={`Event ${eventCode}`} />
      </div>
      <h3>Selected Products</h3>
      <table className='product-table'>
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Ảnh</th>
            <th>Giá</th>
            <th>Doanh nghiệp</th>
            <th>Size</th>
            <th>Mô tả</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name_product}</td>
              <td>
                <img src={product.img} alt={`Product ${product.id}`} />
              </td>
              <td>{product.price}</td>
              <td>{product.business}</td>
              <td>{product.size}</td>
              <td>{product.detail}</td>
              <td>
                <button onClick={() => handleRemoveProduct(product.id)}>
                  Xóa sản phẩm
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Available Products</h3>
      <table className='product-table'>
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Ảnh</th>
            <th>Giá</th>
            <th>Doanh nghiệp</th>
            <th>Size</th>
            <th>Mô tả</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name_product}</td>
              <td>
                <img src={product.img} alt={`Product ${product.id}`} />
              </td>
              <td>{product.price}</td>
              <td>{product.business}</td>
              <td>{product.size}</td>
              <td>{product.detail}</td>
              <td>
                <button
                  onClick={() => handleAddProduct(product.id)}
                  disabled={selectedProducts.some(
                    (selectedProduct) => selectedProduct.id === product.id
                  )}
                >
                  {selectedProducts.some(
                    (selectedProduct) => selectedProduct.id === product.id
                  )
                    ? 'Đã thêm'
                    : 'Thêm sản phẩm'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewSaleAdmin;

import "./style.css"
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [hideFooter, setHideFooter] = useState(false);

  useEffect(() => {
  
  }, []);

  if (hideFooter) {
    // If hideFooter is true, do not render the Footer
    return null;
  }
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>DT5 SPORT</h1>
            <p>20.nh13 PBL6 Nguyễn Dương Gia Bảo Nguyễn Văn Tú Vũ Tiến Hùng Trương Thành Đạt Nguyễn Hiếu</p>
            
          </div>

          <div className='box'>
            <h2>Về DT5-Sport</h2>
            <ul>
              <li>Nghề nghiệp</li>
              <li>Cửa hàng </li>
              <li>Sự quan tâm </li>
              <li>Điều khoản & Điều kiện</li>
              <li>Chính sách quyền riêng tư</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Chăm sóc khách hàng</h2>
            <ul>
              <li>Trung tâm trợ giúp </li>
              <li>Cách mua</li>
              <li>Theo dõi đơn hàng của bạn</li>
              <li>Mua hàng doanh nghiệp và số lượng lớn</li>
              <li>Trả lại và hoàn tiền</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Liên Hệ</h2>
            <ul>
              <li>54 Nguyễn Lương Bằng , TP. Đà Nẵng </li>
              <li>Email: dt5@gmail.com</li>
              <li>Phone: 03 99 23 52 54</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

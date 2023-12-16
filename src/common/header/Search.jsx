import React, { useState } from 'react';
import logoImage from "./logo.png";
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  const [searchValue, setSearchValue] = useState('');
  
  const [showMenu, setShowMenu] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setShowMenu(value.trim() !== '');
  };

  const handleMenuClick = (option) => {
    // Xử lý hành động khi một dòng trong menu được nhấp vào
    console.log(`Đã chọn tìm kiếm theo ${option}: ${searchValue}`);
    // Thêm các hành động khác tùy thuộc vào yêu cầu của bạn
  };
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <Link to="/">
              {/* Thay thế thẻ h1 bằng thẻ img */}
              <img src={logoImage} alt="DT5 SPORT" />
            </Link>
          </div>

          <div className='search-box f_flex'>
      <i className='fa fa-search'></i>
      <input
        type='text'
        placeholder='Tìm kiếm...'
        value={searchValue}
        onChange={handleInputChange}
      />

      {showMenu && (
        <div className="search-menu">
          <p onClick={() => handleMenuClick('shop')}>Tìm kiếm theo shop: {searchValue}</p>
          <p onClick={() => handleMenuClick('sản phẩm')}>Tìm kiếm theo sản phẩm: {searchValue}</p>
        </div>
      )}
    </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search

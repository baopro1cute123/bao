import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './logooo.png';

const Search = ({ CartItem }) => {
  const [searchValue, setSearchValue] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    const search = document.querySelector('.search');
    if (search) {
      search.classList.toggle('active', window.scrollY > 1);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    setShowMenu(value.trim() !== '', () => {
      if (value.trim() !== '') {
        handleMenuClick('sản phẩm');
      }
    });
  };

  const handleMenuClick = (option) => {
    console.error(`Đã chọn tìm kiếm theo ${option}: ${searchValue}`);
  };

  window.addEventListener('scroll', handleScroll);

  const cleanup = () => {
    window.removeEventListener('scroll', handleScroll);
  };

  return (
    <section className="search">
      <div className="container c_flex">
        <div className="logo width">
          <Link to="/">
            <img src={logoImage} alt="DT5 SPORT" />
          </Link>
        </div>

        <div className="search-box f_flex">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={searchValue}
            onChange={handleInputChange}
          />

          {showMenu && (
            <div className="search-menu">
              <p onClick={() => handleMenuClick('shop')}>
                Tìm kiếm theo shop: {searchValue}
              </p>
              <p onClick={() => handleMenuClick('sản phẩm')}>
                Tìm kiếm theo sản phẩm: {searchValue}
              </p>
            </div>
          )}
        </div>

        <div className="icon f_flex width">
          <i className="fa fa-user icon-circle"></i>
          <div className="cart">
            <Link to="/cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
              <span>{CartItem?.length || ''}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;

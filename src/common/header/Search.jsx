import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './logooo.png';

const Search = ({ CartItem }) => {
  const [searchValue, setSearchValue] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector('.search');
      if (search) {
        search.classList.toggle('active', window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setShowMenu(value.trim() !== '');
  };

  const handleMenuClick = (option) => {
    console.log(`Đã chọn tìm kiếm theo ${option}: ${searchValue}`);
    // Add other actions based on your requirements
  };

  return (
    <>
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
                <p key="shop" onClick={() => handleMenuClick('shop')}>
                  Tìm kiếm theo shop: {searchValue}
                </p>
                <p key="product" onClick={() => handleMenuClick('sản phẩm')}>
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
    </>
  );
};

export default Search;

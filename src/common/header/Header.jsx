import React, { useState, useEffect } from "react";
import "./Header.css";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = ({ CartItem }) => {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/login" || window.location.pathname === "/register") {
      setHideHeader(true);

    }
  }, []);

  if (hideHeader) {
    // If hideHeader is true, do not render the Header
    return null;
  }

  return (
    <>
      <Head />
      {/* <Navbar /> */}
      <Search CartItem={CartItem} />
    </>
  );
};

export default Header;

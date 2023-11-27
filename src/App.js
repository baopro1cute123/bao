import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Contactt from "./components/contact/Contactt"
import Login from "./components/LoginSignup/Login"
import Register from "./components/LoginSignup/Register"
import Checkout from "./components/checkout/Checkout"
import Product from "./product/Product"
import { useEffect } from "react"
import ProductDetail from "./productdetail/ProductDetail"
import axiosInstance, { setHeaderToken } from "./apiConfig"
import HeaderLogin from "./common/headerLogin/HeaderLogin"
//import Register from "./components/LoginSignup/Register"
import Pageadmin from "./admin/Pageadmin"
import Profile from "./profile/Profile"
import Order from "./order/Order"
import AllProduct from "./allProduct/AllProduct"
import Business from "./business/Business"
function App() {

  const { productItems } = Data


  const [CartItem, setCartItem] = useState([])
  const [shopItems, setshopItems] = useState([])
  const [apiCate, setapiCate] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0NDgiLCJyb2xlIjpbIlJPTEVfQlVTSU5FU1MiXSwiaWF0IjoxNzAwNjI4ODM0LCJleHAiOjE3MDA2NDY4MzR9.9d3b4kYuEUoNZg3igrnaROFIVQExYfmTuh9TPcKcd30';
      try {
        setHeaderToken(authToken)
        const response = await axiosInstance.get('/product')

        const shopItems = response.data.content;
        console.log('Shop item: ', shopItems);
        setshopItems(shopItems)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const APIcategory = async () => {
      try {
        const response = await axiosInstance.get('category');
        const apiCate = response.data.content;

        setapiCate(apiCate)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    APIcategory();
  }, []);

  const addToCart = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {

      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }


  const decreaseQty = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)


    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {

      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }


  return (
    <>
      <Router>
        {/* {<HeaderLogin />}} */}

        <Header CartItem={CartItem} />
        {/* {<Header CartItem={CartItem} isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />} */}
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} shopItems={shopItems} />
          </Route>
          <Route path='/contact' exact>
            <Contactt />
          </Route>
          <Route path='/login' exact>
            {/* <Login onLoginSuccess={handleLoginSuccess} /> */}
            <Login />
          </Route>
          <Route path='/register' exact>
            <Register />
          </Route>

          <Route path='/product/:id' exact>
            <ProductDetail CartItem={CartItem} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/order' exact>
            <Order />

          </Route>
          <Route path='/allproduct' exact>
            <AllProduct />

          </Route>
          <Route path='/checkout' exact>
            <Checkout />
          </Route>
          <Route path='/profile' exact>
            <Profile />
          </Route>
          <Route path='/product' exact>
            <Product addToCart={addToCart} shopItems={shopItems} apiCate={apiCate} />
          </Route>
          <Route path='/admin' exact>
            <Pageadmin />
          </Route>
          <Route path='/business' exact>
            <Business />
          </Route>
        </Switch >
        {/* {<AppRouter />} */}
        {<Footer />}
      </Router >
    </>
  )
}

export default App

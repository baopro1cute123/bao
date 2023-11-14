import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import Contactt from "./components/contact/Contactt"
import Login from "./components/LoginSignup/Login"
import Register from "./components/LoginSignup/Register"
import AppRouter from "./router"
import MyAccount from "./components/myacc/MyAccount"
import Vendor from "./components/vendor/Vendor"
import Track from "./components/track/Track"
import Checkout from "./components/checkout/Checkout"
import Product from "./product/Product"
//import Register from "./components/LoginSignup/Register"
// import Pageadmin from "./admin/Pageadmin"
function App() {

  const { productItems } = Data
  const { shopItems } = Sdata


  const [CartItem, setCartItem] = useState([])


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
  //const [showHeaderAndFooter, setShowHeaderAndFooter] = useState(true);


  return (
    <>
      <Router>
        {<Header CartItem={CartItem} />}
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path='/contact' exact>
            <Contactt />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/register' exact>
            <Register />
          </Route>
          <Route path='/myacc' exact>
            <MyAccount />
          </Route>
          <Route path='/vendor' exact>
            <Vendor />
          </Route>
          <Route path='/track' exact>
            <Track />
          </Route>
          <Route path='/checkout' exact>
            <Checkout />
          </Route>
          <Route path='/product' exact>
            <Product />
          </Route>
          {/* <Route path='/admin' exact>
            <Pageadmin />
          </Route> */}
        </Switch>
        {/* {<AppRouter />} */}
        {<Footer />}
      </Router>
    </>
  )
}

export default App

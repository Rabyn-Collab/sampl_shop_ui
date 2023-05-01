import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './pages/RootLayOut'
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/user_page/CartPage'
import Shipping from './pages/user_page/Shipping'
import PlaceOrder from './pages/user_page/PlaceOrder'
import ProductList from './pages/admin_page/ProductList'
import Login from './pages/auth_page/Login'
import SignUp from './pages/auth_page/SignUp'
import AddProduct from './pages/admin_page/AddProduct'
import OrderDetail from './pages/user_page/OrderDetail'
import UserProfile from './pages/user_page/UserProfile'

const App = () => {


  return (


    <Routes>

      <Route path='/' element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path='product_list' element={<ProductList />} />
        <Route path='product_add' element={<AddProduct />} />
        <Route path='user_login' element={<Login />} />
        <Route path='user_profile' element={<UserProfile />} />
        <Route path='user_signUp' element={<SignUp />} />
        <Route path='product/:id' element={<ProductDetail />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='user/shipping' element={<Shipping />} />
        <Route path='user/placeorder' element={<PlaceOrder />} />
        <Route path='order/:id' element={<OrderDetail />} />

      </Route>

    </Routes>
  )
}

export default App

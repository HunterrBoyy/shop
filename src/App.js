import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import HomePage from './pages/HomePage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auths/Login';
import RouteUser from './components/RouteUser';
import SignUp from './pages/auths/SignUp';
import ProductList from './pages/AdminPage/ProductList';
import AddProduct from './pages/AdminPage/AddProduct';
import EditProduct from './pages/AdminPage/EditProduct';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/UserPage/CartPage';
import Shipping from './pages/UserPage/Shipping';
import OrderPage from './pages/UserPage/OrderPage';
import UserProfile from './pages/UserPage/UserProfile';
import OrderDetail from './pages/UserPage/OrderDetail';
import AdminProfile from './pages/AdminPage/AdminProfile';
import AdminRoutes from './components/AdminRoutes';
import UserRoute from './components/UserRoute';




const App = () => {
  


  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />}>

          <Route index element={<HomePage />} />

          <Route element={<RouteUser/>}>

          <Route path="user/login" element={<Login />} />
          <Route path="user/signUp" element={<SignUp />} />
         </Route>



         <Route element={<AdminRoutes />}>
            <Route path="products/all" element={<ProductList />} />
            <Route path="product/add" element={<AddProduct />} />
            <Route path="product/:id" element={<EditProduct />} />
            <Route path="user/allDetail" element={<AdminProfile />} />
          </Route>





          <Route path="product/detail/:id" element={<ProductDetail />} />



          <Route element={<UserRoute />}>
            <Route path='user/cart' element={<CartPage />} />
            <Route path='user/shipping' element={<Shipping />} />
            <Route path='/user/checkout' element={<OrderPage />} />
            <Route path='/user/profile' element={<UserProfile />} />
            <Route path='/user/order/:id' element={<OrderDetail />} />
          </Route>






        </Route>

      </Routes>
      <ToastContainer autoClose={1000} position='top-right' />
    </>
  )
}

export default App
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

  // const reviews = [
  //   { name: 'hari', rating: 5 },
  //   { name: 'shyam', rating: 4 },
  //   { name: 'sita', rating: 3 },
  //   { name: 'hari', rating: 5 },

  // ];
  // const total = reviews.reduce((a, b) => a + b.rating, 0);
  // console.log(total / reviews.length);


  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />}>

          <Route index element={<HomePage />} />


          <Route path="user/login" element={<Login />} />
          <Route path="user/signUp" element={<SignUp />} />


          <Route element={<AdminRoutes />}>
          <Route path="products/all" element={<ProductList />} />
          <Route path="product/add" element={<AddProduct />} />
          <Route path="product/:id" element={<EditProduct />} />
          </Route>
          

          {/* <Route path="user/allDetail" element={<AdminProfile />} /> */}


          <Route path="product/detail/:id" element={<ProductDetail />} />

          {/* <Route path='user/cart' element={<CartPage />} />
          <Route path='/user/shipping' element={<Shipping />} />
          <Route path='/user/checkout' element={<OrderPage />} />
          <Route path='/user/profile' element={<UserProfile />} />
          <Route path='/user/order/:id' element={<OrderDetail />} /> */}




        </Route>

      </Routes>
      <ToastContainer autoClose={1000} position='top-right' />
    </>
  )
}

export default App
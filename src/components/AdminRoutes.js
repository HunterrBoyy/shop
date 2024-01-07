import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const AdminRoutes = () => {
  const { user } = useSelector((store) => store.user);
  return user === null ? <Navigate to='/' replace={true} /> :
    user.isAdmin ? <Outlet /> : <Navigate to='/' replace={true} />
}

export default AdminRoutes

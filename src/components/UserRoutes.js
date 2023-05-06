import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router';

const UserRoutes = () => {
  const { user } = useSelector((state) => state.userInfo);


  return user !== null ? <Navigate to="/" replace /> : <Outlet />;

}

export default UserRoutes
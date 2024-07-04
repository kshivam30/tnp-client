// src/components/PrivateRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const role = useSelector((state) => state.user.role);
  
  return role ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

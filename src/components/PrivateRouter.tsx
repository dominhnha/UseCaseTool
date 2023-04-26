import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux.hook'; // Update with your actual path
import { selectorLogin } from '../redux/user/auth';

interface privateRouter{
  isLogin:boolean;
}

const PrivateRouter: React.FC<privateRouter> = ({isLogin}) => {
  return isLogin ? <Outlet /> : <Navigate to="/SignIn" />;
};

export default PrivateRouter;
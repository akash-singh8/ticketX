
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useModal } from '../modalProvider/Modalprovider';

const ProtectedRoutes = ({ element}) => {
  const {user,openotpModal}=useModal();
  if (user && user.ticketResolved  && user.verified) {
    return <Outlet/>;
  } else {
     openotpModal()
     return<Navigate to="/" />;
  }
};

export default ProtectedRoutes;

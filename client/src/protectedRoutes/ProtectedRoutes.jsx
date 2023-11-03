
import React from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoutes = ({ element, isAdmin }) => {
  if (isAdmin) {
    return <Route element={element} />;
  } else {
    return null;
  }
};

export default ProtectedRoutes;

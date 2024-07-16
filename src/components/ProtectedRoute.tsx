import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return <>{element}</>;
};

export default ProtectedRoute;

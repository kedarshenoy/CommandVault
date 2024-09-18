// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = () => {
//     return !!localStorage.getItem('Token');
//   };

//   if (!isAuthenticated()) {
//     return <Navigate to="/login" />;
//   }
//   return children;
// };

// export default ProtectedRoute;

import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('Token');
    return token && token !== 'Guest';
  };

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

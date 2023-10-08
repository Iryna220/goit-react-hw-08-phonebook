import { Route, Routes, Navigate } from 'react-router-dom';
import PrivatRoute from 'components/PrivatRoute/PrivatRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import Loader from 'components/Loader/Loader';

import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/MyContactsPage/MyContactsPage';
import MyContactsPage from 'pages/MyContactsPage/MyContactsPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<PrivatRoute />}>
        <Route path="/contacts" element={<MyContactsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default UserRoutes;

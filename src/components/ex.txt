import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { reconnectCurrentUser } from 'store/operations';

import Layout from './Layout/Layout';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import LogInPage from 'pages/LogInPage/LogInPage';
import ContactPage from 'pages/ContactPage/ContactPage';
import HomePage from 'pages/HomePage/HomePage';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reconnectCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LogInPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirect={'/login'}>
                <ContactPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}
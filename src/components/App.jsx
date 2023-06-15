import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/layout';
import RegistrPage from '../Pages/Registation/registation';
import LoginPage from '../Pages/Login/login';
import PageContacts from '../Pages/Contacts/contacts';
import HomePage from '../Pages/Home/home';
import { authorizatedCurrentUser } from 'store/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from './Routs/routsPrivate';
import PublicRoute from './Routs/routsPublick';
import { Navigate } from 'react-router-dom/dist';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authorizatedCurrentUser());
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
                <RegistrPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute moveto={'/login'}>
                <PageContacts />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
};

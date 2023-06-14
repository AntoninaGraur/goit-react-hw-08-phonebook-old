import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/layout';
import RegistrPage from '../Pages/Registation/registation';
import LoginPage from '../Pages/Login/login';
import PageContacts from '../Pages/Contacts/contacts';
import HomePage from '../Pages/Home/home';
import { authorizatedCurrentUser } from 'store/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

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
          <Route path="/register" element={<RegistrPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<PageContacts />} />
        </Route>
      </Routes>
    </>
  );
}

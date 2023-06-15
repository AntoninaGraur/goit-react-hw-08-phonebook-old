import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children }) {
  const isLogIn = useSelector(state => state.auth.isLoggedIn);
  return !isLogIn ? children : <Navigate to="/contacts" />;
}
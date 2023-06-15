import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, moveto }) {
  
  const isLogIn = useSelector(state => Boolean(state.auth.token) );
  return isLogIn ? children : <Navigate to={moveto} />;
}
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/operations';
import { useNavigate } from 'react-router-dom';

import {LoginContainer, LoginInput, LoginButton} from './login.styled'

function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const errorMessage = useSelector(state => state.auth.errorMessage);

  const onFormSubmit = evt => {
    evt.preventDefault();

    const sendedObj = {
      email,
      password,
    };
    dispatch(loginUser(sendedObj)).unwrap().then(() => navigate('/'));
  };

  return (
    <LoginContainer>
      <h2>Log in page</h2>
      <form  onSubmit={onFormSubmit}>
        <label>
          Email
          <LoginInput
            type="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </label>
        <label>
          Password
          <LoginInput
            type="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </label>
        {errorMessage && <p>Wrong email or password. Try again</p>}
        <LoginButton>Log in</LoginButton>
      </form>
    </LoginContainer>
  );
}

export default LoginPage;
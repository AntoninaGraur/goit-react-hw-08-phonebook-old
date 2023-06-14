import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { registrUser } from '../../store/operations';

import { RegistrContainer, RegistrInput, RegistrButton } from './registrarion.styled';
import { useNavigate } from 'react-router-dom';

function RegistrPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const errorMessage = useSelector(state => state.auth.errorMessage);

  const onFormSubmit = evt => {
    evt.preventDefault();

    const sendedObj = {
      name,
      email,
      password,
    };
    dispatch(registrUser(sendedObj)).unwrap().then(() => navigate('/'));
  };

  return (
    <RegistrContainer>
      <h2>Registration page</h2>
      <form action="" onSubmit={onFormSubmit}>
        <label>
          Name
          <RegistrInput
            type="text"
            name="name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            autocomplete = "off"
          />
        </label>
        <label>
          Email
          <RegistrInput
            type="email"
            name="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            autocomplete = "off"
          />
        </label>
        <label>
          Password
          <RegistrInput
            type="password"
            name="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            autocomplete = "off"
          />
        </label>
        {errorMessage && <p>No way... You already have this contact in list</p>}
        <RegistrButton>Registration</RegistrButton>
      </form>
    </RegistrContainer>
  );
}

export default RegistrPage;
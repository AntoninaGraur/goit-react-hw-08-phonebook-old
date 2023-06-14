import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

function setUptHeadersToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function unSetUpHeadersToken() {
  axios.defaults.headers.common.Authorization = ``;
}


export async function registrUserApi(registrationDate) {
  const { data } = await axios.post('/users/signup', registrationDate);
  setUptHeadersToken(data.token);
  return data;
}

export async function LoginUserApi(logInDate) {
  const { data } = await axios.post('/users/login', logInDate);
 setUptHeadersToken(data.token);
  return data;
}
export async function LogoutUserApi() {
  const { data } = await axios.post('/users/logout');
  unSetUpHeadersToken();
  return data;
}

export async function GetAllContacts() {
  const { data } = await axios('/contacts');
  return data;
}

export async function AddUserContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function DeleteUserContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
export async function getAuthorizatedUserApi(savedToken) {
  setUptHeadersToken(savedToken);
  const { data } = await axios('/users/current');
  return data;
}
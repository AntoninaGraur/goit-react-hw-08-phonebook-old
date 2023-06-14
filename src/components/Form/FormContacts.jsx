import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../store/operations';
import { toast } from 'react-toastify';
import {FormInput, AddButton} from './formContact.styled'


export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const users = useSelector(state => state.contacts.items);
  const errorFild = useSelector(state => state.contacts.error);

  const onFormSubmit = evt => {
    evt.preventDefault();

    const sameName = users.filter(
      user => user.name.toLowerCase() === name.toLowerCase()
    );
    if (sameName.length === 0) {
      dispatch(addContact({ name, number}));
      resetInputs();
    } else toast.warn(`${name} is already in contacts`);
  };

  const resetInputs = () => {
    setName('');
    setNumber('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Name
        <FormInput
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label>
        Number
        <FormInput
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      {errorFild && <p> Nicht in ordnung</p>}
      <AddButton>Add contact</AddButton>
    </form>
  );
}

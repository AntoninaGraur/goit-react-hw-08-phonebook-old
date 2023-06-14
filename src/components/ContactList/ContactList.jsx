import 'react-toastify/dist/ReactToastify.css';
import { deleteContact, getContacts } from '../../store/operations';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Dna } from 'react-loader-spinner';
import {ContactMenu,ContactsLi, DeleteBtn} from './contactList.styled'

export function ContactList() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);
  const loader = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ContactMenu>
        {filteredContacts.map(contact => (
          <ContactsLi key={contact?.id}>
            {contact?.name} <span>{contact?.number} </span>
            <DeleteBtn onClick={() => dispatch(deleteContact(contact?.id))}>
              Delete
            </DeleteBtn>
          </ContactsLi>
        ))}
      </ContactMenu>
      {loader && (
        <div>
          <Dna
            visible={true}
            height="160"
            width="160"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
    </>
  );
}

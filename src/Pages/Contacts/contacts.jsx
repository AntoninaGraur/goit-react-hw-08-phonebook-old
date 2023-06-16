import  ContactForm  from '../../components/Form/formContacts';
import { ContactList } from 'components/ContactList/contactList';
import { Filter } from 'components/Filter/filter';
import { SectionMain } from '../../components/Container/container';
import { ToastContainer } from 'react-toastify';
import { FormContainer, FormTitle } from './contacts.styled';

function PageContacts() {
  return (
    <>
      <SectionMain>
        <FormContainer>
          <FormTitle>Phonebook</FormTitle>
          <ContactForm />
          <h2> Contacts</h2>
          <Filter />
          <ContactList />
        </FormContainer>
        <ToastContainer />
      </SectionMain>
    </>
  );
}

export default PageContacts;

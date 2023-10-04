import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/contacts/contactSelectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactOperations';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './App.module.css';
import Notification from './Notification/Notification';
import Loader from './Loader/Loader';

function App() {
  const contacts = useSelector(getContacts);
  const isContacts = Boolean(contacts.length);
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log(loading);

  return (
    <div>
      {loading && <Loader />}
      <div className={css.phonebookSection}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.phonebookContacts}>Contacts</h2>
        <div className={css.allContacts}>All contacts: {contacts.length}</div>
        {isContacts ? (
          <div>
            <Filter />
            <ContactList />
          </div>
        ) : (
          <Notification message="Contact list is empty" />
        )}
      </div>
    </div>
  );
}

export default App;

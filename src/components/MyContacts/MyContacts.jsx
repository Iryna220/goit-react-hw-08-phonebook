import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getIsLoading } from 'redux/contacts/contactSelectors';
import { fetchContacts } from 'redux/contacts/contactOperations';
import styles from './MyContacts.module.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Notification from 'components/Notification';
import Loader from 'components/Loader/Loader';

function MyContacts() {
  const contacts = useSelector(getContacts);
  const isContacts = Boolean(contacts.length);
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {loading && <Loader />}
      <div className={styles.phonebookContainer}>
        <h1 className={styles.titlePhonebook}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.titleContacts}>Contacts</h2>
        <div className={styles.AllContacts}>
          All contacts: {contacts.length}
        </div>

        {isContacts ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="Contact list is empty" />
        )}
      </div>
    </div>
  );
}

export default MyContacts;

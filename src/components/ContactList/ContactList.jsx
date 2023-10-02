import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contactSelectors';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;

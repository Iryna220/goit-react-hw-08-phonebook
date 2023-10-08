import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactOperations';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onRemoveContact = payload => {
    dispatch(deleteContact(payload));
  };

  return (
    <li className={css.listItem}>
      <p className={css.contactItem}>
        {name} {number}
      </p>
      <button
        className={css.btnDeleteContact}
        type="submit"
        onClick={() => onRemoveContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

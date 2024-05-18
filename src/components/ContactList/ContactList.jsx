import { Contact } from 'components';

import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/contactsSlice';
import { getItems } from '../../redux/selectors';

export function ContactList() {
  const currentContacts = useSelector(getItems);

  const dispatch = useDispatch();
  
  const visibleValue = currentContacts;

  return visibleValue && (
    <ul>
      {visibleValue.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={() => dispatch(deleteContact(contact.id))} />
      ))}
    </ul>
  );
}
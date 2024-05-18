import { Contact } from 'components';

import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/contactsSlice';
import { getFilter, getItems } from '../../redux/selectors';

export function ContactList() {
  const currentContacts = useSelector(getItems);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const visibleValue = currentContacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()) || item.number.includes(filter.toLowerCase())
  );

  return (
    visibleValue && (
      <ul>
        {visibleValue.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        ))}
      </ul>
    )
  );
}

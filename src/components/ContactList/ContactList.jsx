import { Contact } from 'components';

import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../myredux/contactsSlice';
import { getFilter, getItems } from '../../myredux/selectors';

export function ContactList() {
  const currentContacts = useSelector(getItems);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const visibleValue = currentContacts.filter(
    item =>
      item.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      item.number.includes(filter.toLowerCase().trim())
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

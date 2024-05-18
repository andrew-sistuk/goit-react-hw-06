import 'modern-normalize';
import './App.css';

import { ContactForm, SearchBox, ContactList } from 'components';

import { useState } from 'react';
import { nanoid } from 'nanoid';

// import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const initialValues = {
    name: '',
    number: '',
  };

  const [contacts, setContacts] = useState(() =>
    localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : []
  );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const contactsVisible = contacts.filter(el =>
  //   el.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  // );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm initialValues={initialValues} />
      {/* <SearchBox value={filter} onFilter={setFilter} /> */}
      <SearchBox />
      <ContactList />
    </>
  );
}

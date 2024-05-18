import 'modern-normalize';
import './App.css';

import { ContactForm, SearchBox, ContactList } from 'components';

// import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const initialValues = {
    name: '',
    number: '',
  };

  // const [contacts, setContacts] = useState(() =>
  //   localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : []
  // );

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm initialValues={initialValues} />
      <SearchBox />
      <ContactList />
    </>
  );
}

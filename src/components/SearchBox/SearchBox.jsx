import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { getFilter } from '../../redux/selectors';
import { filterContacts } from '../../redux/filtersSlice';

export function SearchBox() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={css['search-box']}>
      <label className={css['search-label']} htmlFor="searhbox">
        Find contacts by name
      </label>
      <input
        className={css['search-field']}
        type="text"
        value={filter}
        onChange={evt => dispatch(filterContacts(evt.target.value.trim()))}
        placeholder="Input name"
        name="searhbox"
      />
    </div>
  );
}

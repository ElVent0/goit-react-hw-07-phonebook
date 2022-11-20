import css from './Contacts.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/phonebookSlice';
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.phonebook.contacts);
  const filter = useSelector(store => store.phonebook.filter);

  const filteredArray = () => {
    let filteredArray = [];
    if (filter === '') {
      filteredArray = contacts;
    } else if (filter !== '') {
      return contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return filteredArray;
  };

  return (
    <>
      <ul className={css.list}>
        {filteredArray().map(item => {
          return (
            <li className={css.item} key={item.name}>
              {item.name}: {item.number}
              <button
                className={css.button}
                name={item.name}
                onClick={() => {
                  dispatch(deleteContact(item.name));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

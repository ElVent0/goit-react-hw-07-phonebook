import css from './Contacts.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveContacts, selectIsLoading } from '../../redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectActiveContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <p className={css.paragraph}>Loading</p>
      ) : (
        <ul className={css.list}>
          {contacts.map(item => {
            return (
              <li className={css.item} key={item.id}>
                {item.name}: {item.number}
                <button
                  className={css.button}
                  name={item.name}
                  onClick={() => {
                    dispatch(deleteContact(item.id));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

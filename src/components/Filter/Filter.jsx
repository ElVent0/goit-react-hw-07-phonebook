import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/phonebookSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <p className={css.paragraph}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};

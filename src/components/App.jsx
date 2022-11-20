import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <>
      <h2 className={css.header}>Phonebook</h2>
      <Phonebook />
      <h2 className={css.header}>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  );
};

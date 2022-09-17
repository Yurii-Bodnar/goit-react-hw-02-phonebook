import { nanoid } from 'nanoid';
const PhonebookForm = ({ handleChange, handleSubmitt, name, number }) => {
  const id = nanoid();
  return (
    <form onSubmit={handleSubmitt}>
      <label htmlFor={id}>
        <p>Name</p>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          id={id}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={id}>
        <p>Number</p>
        <input
        onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          id={id}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label><br/>
      <button type="submit">add conttact</button>
    </form>
  );
};

export default PhonebookForm;

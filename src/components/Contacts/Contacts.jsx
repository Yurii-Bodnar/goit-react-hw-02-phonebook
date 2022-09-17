import { nanoid } from 'nanoid';
const Contacts = ({ contacts, value, filterContacts }) => {
  return (
    <div>
      
      <input onChange={filterContacts} type="text" name='filter' value={value}/>
      <ul>
        {  contacts.map(contact => {
          const key = nanoid();
          return (
            <li key={key}>
              <p>
                {contact.name}:<span>{contact.number}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;

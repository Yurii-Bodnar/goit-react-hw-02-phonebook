import { Component } from 'react';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import Contacts from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }
  
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContacts = (contacts, name, number) => {
    this.setState(prewState =>{
      return{
        contacts: [...prewState.contacts, {name : name, number: number}]
      }
    })
    
  };
  reset = () => {
    this.setState({name: '' , number: ''});
  };

  handleSubmitt = e => {
    e.preventDefault();
    this.addContacts(this.state.contacts,this.state.name,this.state.number);
    this.reset();
  };

  eventFilterContacts = e =>{ 
    this.setState({ filter: e.target.value });
    
  }

  getVisibleContacts= () =>{
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>(contact.name.toLowerCase().includes(normalizedFilter)))
  }

  render() {
 
    const {  name, number, filter } = this.state;
    const visibleContact = this.getVisibleContacts()

    return (
      <>
      <h1>Phonebook</h1>
        <PhonebookForm
          handleChange={this.handleChange}
          handleSubmitt={this.handleSubmitt}
          name={name}
          number={number}
        />
        <h2>Contacts</h2>
       
        <Contacts contacts={visibleContact} number={number} value={filter} filterContacts={this.eventFilterContacts} />
      </>
    );
  }
}

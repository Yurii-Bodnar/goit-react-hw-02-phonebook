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
    //PhonebookForm
    name: '',
    number: ''
  }
  
// PhoneboookForm
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
//PhonebookForm
  addContacts = (contacts, name, number) => {
    this.setState(prewState =>{
      return{
        contacts: [...prewState.contacts, {name : name, number: number}]
      }
    })
    
  };
//PhonebookForm
  reset = () => {
    this.setState({name: '' , number: ''});
  };
//PhonebookForm
  handleSubmitt = e => {
    e.preventDefault();
    this.addContacts(this.state.contacts,this.state.name,this.state.number);
    this.reset();
  };
// лишається в апп
  eventFilterContacts = e =>{ 
    this.setState({ filter: e.target.value });
    
  }
//лишається в апп
  getVisibleContacts= () =>{
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>(contact.name.toLowerCase().includes(normalizedFilter)))
  }

  render() {
    //забрати name,number
    const {  name, number, filter } = this.state;
    const visibleContact = this.getVisibleContacts()

    return (
      <>
      <h1>Phonebook</h1>
      //handleChange,handleSubmitt,name,number, переносим в компонент 
        <PhonebookForm
          handleChange={this.handleChange}
          handleSubmitt={this.handleSubmitt}
          name={name}
          number={number}
        />
        <h2>Contacts</h2>
        //visibleContact, і функ getVisibleContacts, value,filterContacts , лишається в  App, number забираєм
        <Contacts contacts={visibleContact} number={number} value={filter} filterContacts={this.eventFilterContacts} />
      </>
    );
  }
}

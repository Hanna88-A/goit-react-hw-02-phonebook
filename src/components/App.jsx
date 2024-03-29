import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { nanoid } from 'nanoid';



export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
   ],
   filter: ''
  };

  formSubmitHandle = (name, number) => {
    const { contacts } = this.state;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
       return
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts ]
    }))
    
   
  };
  
  deleteContact = (idContact) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact)
    }))
  };
  changeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };
  
  
  render() {
    const { filter, contacts } = this.state
    
    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(({name}) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    console.log(visibleContacts);
    
    return (
      <div>
      <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandle}/>

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList
          dataContacts={visibleContacts}
          onDeleteContact={this.deleteContact}
          onSubmit={this.formSubmitHandle}
        />
      </div>
    )
  };
};

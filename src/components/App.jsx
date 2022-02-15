import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";

export class App extends Component {
  state = {
   contacts: [],
   filter: ''
  };

  render() {
    return (
      <div>
      <h1>Phonebook</h1>
      <ContactForm/>

        <h2>Contacts</h2>
      <Filter/>
      
      </div>
  
    )
  };
  
};

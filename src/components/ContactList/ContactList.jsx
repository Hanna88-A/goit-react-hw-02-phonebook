import React, { Component } from "react";

class ContactList extends Component {
    
    render() {
        return (
            <ul>
                {this.props.dataContacts.map(({ id, name, number }) => (

                    <li key={id}>
                        {name}:
                        <span>{number}</span>
                        <button onClick={()=>this.props.onDeleteContact(id)}>Delete</button>
                    </li>))}
            </ul>

        );
    };
};

export default ContactList;
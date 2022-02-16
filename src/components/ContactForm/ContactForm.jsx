import React, { Component } from "react";

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };


    onHandleChange = evt => {
        const { name, value } = evt.currentTarget;
        this.setState({ [name]: value });
       
        
    };

    onHandleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
        
    };
    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form onSubmit={this.onHandleSubmit}>
                <label>
                    Name
                    <input
                        onChange={this.onHandleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label>
                    Number
                    <input
                        onChange={this.onHandleChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
        
                <button type="submit">Add contact</button>
            </form>
        )

    };
};

export default ContactForm;

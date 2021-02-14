import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { CSSTransition } from 'react-transition-group';
import './App.css';

class App extends Component {
 
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }
  
  addContact = ({ name, number }) => {
    const searchSameName = this.state.contacts
      .map((cont) => cont.name)
      .includes(name);

    if (searchSameName) {
      alert(`${name} is already in contacts`);
    } else if (name.length === 0) {
      alert("Fields must be filled!");
    } else {
      const contact = {
        id: shortid.generate(),
        name,
        number
      };
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };
  
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  componentDidMount() {
    console.log('App');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      console.log('Новий конт')
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return(
      <>
        <CSSTransition in={true} appear={true} timeout={500} classNames="Appbar-slideIn" unmountOnExit>
          <h1>Phonebook</h1>
        </CSSTransition>
        <ContactForm
          onSubmit={this.addContact}
        />
        <Filter
          value={filter}
          onChange={this.changeFilter}
        />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  };
};

export default App;


import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Alert from './components/Alert';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import titleTransition from './transitions/title.module.css';
import popTransition from './transitions/pop.module.css';
import alertTransition from './transitions/alert.module.css';


const INITIAL_STATE = {
  isVisible: false,
  message: "",
};
  
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    ...INITIAL_STATE,
  };
  
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };
  
  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  
  setMessage = (message) => {
    this.setState({ isVisible: true, message: message });
    setTimeout(() => {
      this.setState({
        ...INITIAL_STATE,
      });
    }, 1500);
  };

  addContact = ({ name, number }) => {
    const searchSameName = this.state.contacts
      .map((cont) => cont.name)
      .includes(name);

    if (searchSameName) {
     this.setState({
        isVisible: true,
        message: "Contact already exists!",
      });
      setTimeout(() => {
        this.setState({
          ...INITIAL_STATE,
        });
      }, 1500);
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
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  render() {
    const { contacts, filter, isVisible, message } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return(
      <div className="app">
        <CSSTransition in timeout={500} classNames={titleTransition} appear>
          <h1 className="title">Phonebook</h1>
        </CSSTransition>
        <CSSTransition
          in={isVisible}
          timeout={250}
          classNames={alertTransition}
          unmountOnExit
        >
          <Alert message={message} />
        </CSSTransition>
        <ContactForm
          onSubmit={this.addContact}
          onSetMessage={this.setMessage}
        />
        <CSSTransition in={contacts.length > 1}
          timeout={250}
          classNames={popTransition}
          unmountOnExit>
          <Filter
            value={filter}
            onChange={this.changeFilter}
          />
        </CSSTransition>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  };
};

export default App;


import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition } from "react-transition-group";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import errorMessage from "../components/Notification/Notification";

import s from "./App.module.css";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const names = this.state.contacts.map((contact) =>
      contact.name.toLowerCase()
    );

    if (names.includes(contact.name.toLowerCase().trim())) {
      errorMessage(contact.name);
    } else {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className={s.box}>
        <CSSTransition
          in={true}
          appear
          timeout={500}
          classNames={s}
          unmountOnExit
        >
          <h1 className={s.title}>Phonebook</h1>
        </CSSTransition>

        <ContactForm onAddContact={this.addContact} />

        {visibleContacts.length > 0 && (
          <CSSTransition
            in={true}
            timeout={250}
            classNames={s.filter}
            unmountOnExit
          >
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          </CSSTransition>
        )}

        <ContactList
          contacts={visibleContacts}
          onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}

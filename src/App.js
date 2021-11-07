import React, { Component } from "react";
import shortid from "shortid";
import Form from "./Form/Form.js";
import ContactList from "./Contacts/ContactsList";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { key: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { key: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { key: "id-3", name: "Eden Clements", number: "645-17-79" },
      { key: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleFilter = (e) => {
    const { value } = e.currentTarget;
    this.setState({
      filter: value,
    });
  };

  resetState = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  handleAddContact = () => {
    this.resetState();
    const { contacts, name, number } = this.state;
    if (
      contacts.find((contact) => {
        return contact.name === name || contact.number === number;
      })
    )
      return alert(`${name} is already in contacts`);

    if (name === "" || number === "") return alert("Please enter correct name");
    else {
      this.setState({
        contacts: [
          ...contacts,
          {
            key: shortid.generate(),
            name: name,
            number: number,
          },
        ],
      });
    }
  };

  handleDeleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.key!==contactId)
    }))
  }

  render() {
    const { name, number, contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    const foundContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });

    return (
      <div className="App">
         <h1>Phonebook</h1>
        <Form
          name={name}
          number={number}
          handleChange={this.handleChange}
          handleAddContact={this.handleAddContact}
        />
          <h2 className="contact_title">Contacts</h2>
          <Filter filter={filter} handleFilter={this.handleFilter} />
          <ContactList contacts={foundContacts} handleDeleteContact= {this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;

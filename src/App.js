import { Component } from "react"
import "./App.css"
import { v4 as uuidv4 } from "uuid"
import ContactForm from "./Components/ContactForm/"
import ContactList from "./Components/ContactList"
import Filter from "./Components/Filter"

class App extends Component {
  state = {
    contacts: [],

    filter: "",
  }
  conponentDidMount() {
    const contacts = JSON.parce(localStorage.getItem("contacts"))
    this.setState({ contacts: contacts })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("constacts", JSON.stringify(this.state.contacts))
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  filterContacts = () => {
    const { contacts, filter } = this.state
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const newContact = {
      id: uuidv4(),
      name: e.target[0].value,
      number: e.target[1].value,
    }

    const nameCheck = this.state.contacts.find(
      (contact) => contact.name === newContact.name
    )

    nameCheck
      ? alert(`${newContact.name}, is already in contacts`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, newContact],
        }))

    e.target[0].value = ""
    e.target[1].value = ""
  }

  deleteContact = (key) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== key),
    }))
  }

  render() {
    // console.log(this.state)

    const filteredContacts = this.filterContacts()
    // console.log(filteredContacts)
    return (
      <>
        <h1> Phonebook </h1>
        <ContactForm
          onFormInput={this.handleChange}
          onSubmitClick={this.handleSubmit}
        />
        <h2> Contacts </h2>
        <Filter onInput={this.handleChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </>
    )
  }
}

export default App

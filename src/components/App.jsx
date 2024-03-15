import { useState, useEffect } from "react";

import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import { Notify } from "notiflix";
import { AppContainer, ContactsTitle, FormTitle } from "./App.styled";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const updateContacts = (newContact) => {
    const isNameExists = contacts.some(
      (contact) => contact.name === newContact.name
    );

    if (isNameExists) {
      Notify.info(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <AppContainer>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm addContact={updateContacts} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter onChange={handleFilterChange} />
      {contacts.length > 0 && (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      )}
    </AppContainer>
  );
};
export default App;

import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";

import { AppContainer, ContactsTitle, FormTitle } from "./App.styled";

const App = () => {
  return (
    <AppContainer>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};
export default App;



import { ContactListElement } from "./ContactList.styled";
import Contact from "../Contact/Contact"; 
import { useSelector } from "react-redux";
import { getFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ContactListElement>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactListElement>
  );
};

export default ContactList;

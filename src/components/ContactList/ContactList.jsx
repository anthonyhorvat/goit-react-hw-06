import {
  ContactListElement,
  ContactElement,
  DeleteButton,
} from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector((state) => {
    const filtered = state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    );
    return filtered;
  });
  return (
    <ContactListElement>
      {filteredContacts.map((contact) => (
        <ContactElement key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </DeleteButton>
        </ContactElement>
      ))}
    </ContactListElement>
  );
};

export default ContactList;

import {
  ContactListElement,
  ContactElement,
  DeleteButton,
} from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { getFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <ContactListElement>
      {contacts.map((contact) => (
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

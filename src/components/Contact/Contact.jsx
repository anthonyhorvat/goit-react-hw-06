import { ContactElement } from "./Contact.styled";
import { DeleteButton } from "./Contact.styled";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ContactElement>
      {contact.name}: {contact.number}
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ContactElement>
  );
};

export default Contact;

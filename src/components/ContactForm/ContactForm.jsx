import { useDispatch, useSelector } from "react-redux";
import { FormInput, InputName, NeonButton } from "./ContactForm.styled";
import { Notify } from "notiflix";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";
import { getContacts } from "../../redux/selectors";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
      id: nanoid(),
    };

    const currentName = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (currentName) {
      Notify.info(`${currentName.name} is already exist!`);
      return;
    }

    dispatch(addContact(contact));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputName>Name</InputName>
      <FormInput type="text" placeholder="Enter name" name="name" required />
      <InputName>Number</InputName>
      <FormInput type="tel" placeholder="Enter number" name="number" required />
      <NeonButton type="submit">Add contact</NeonButton>
    </form>
  );
};

export default ContactForm;

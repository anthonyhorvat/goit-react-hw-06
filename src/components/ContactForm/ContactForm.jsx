import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormInput, InputName, NeonButton } from "./ContactForm.styled";
import { Notify } from "notiflix";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const [formData, setFormData] = useState({ name: "", number: "" });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevForm) => ({ ...prevForm, [name]: value }));
    console.log(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isDuplicate =
      formData.name &&
      contacts.some((contact) => contact.name === formData.name);

    if (isDuplicate) {
      Notify.info(`${formData.name} is already in contacts`);
      reset();
    } else {
      dispatch(addContact(formData));
      reset();
    }
  };

  const reset = () => {
    setFormData({ name: "", number: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputName>Name</InputName>
      <FormInput
        type="text"
        value={formData.name}
        onChange={inputChange}
        placeholder="Enter name"
        name="name"
        required
      />
      <InputName>Number</InputName>
      <FormInput
        type="tel"
        value={formData.number}
        onChange={inputChange}
        placeholder="Enter number"
        name="number"
        required
      />
      <NeonButton type="submit">Add contact</NeonButton>
    </form>
  );
};

export default ContactForm;

// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { FormInput, InputName, NeonButton } from './ContactForm.styled';
// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleAddContact = event => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const { name, number } = this.state;

//     const id = nanoid();
//     const newContact = { id, name, number };

//     this.props.addContact(newContact);
//     form.reset();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleAddContact}>
//         <InputName>Name</InputName>
//         <FormInput
//           type="text"
//           name="name"
//           onChange={this.handleInputChange}
//           placeholder="Enter name"
//           required
//         />
//         <InputName>Number</InputName>
//         <FormInput
//           type="text"
//           name="number"
//           onChange={this.handleInputChange}
//           placeholder="Enter number"
//           required
//         />
//         <NeonButton type="submit">Add contact</NeonButton>
//       </form>
//     );
//   }
// }

// export default ContactForm;

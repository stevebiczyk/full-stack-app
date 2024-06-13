import { useState } from "react";

const ContactForm = ({ existingContact = {}, updateCallback }) => {
  const [firstName, setFirstName] = useState(existingContact.firstName || "");
  const [lastName, setLastName] = useState(existingContact.lastName || "");
  const [email, setEmail] = useState(existingContact.email || "");
  const [phone, setPhone] = useState(existingContact.phone || "");

  const updating = Object.entries(existingContact).length !== 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      firstName,
      lastName,
      email,
      phone,
    };

    const url =
      "http://127.0.0.1:5000/" +
      (updating ? `update_contact/${existingContact.id}` : "create_contact");
    const options = {
      method: updating ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    };
    const response = await fetch(url, options);
    if (response.status !== 201 && response.status !== 200) {
      const contactData = response.json();
      alert(contactData.message);
    } else {
      updateCallback();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Contact</h2>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type="submit">{updating ? "Update" : "Create"}</button>
    </form>
  );
};
export default ContactForm;
// The ContactForm component is a form that allows users to add a new contact. It has input fields for the first name, last name, email, and phone number. The component uses the useState hook to manage the form state and the addContact function to add a new contact. When the form is submitted, the handleSubmit function is called, which adds the new contact and resets the form fields.

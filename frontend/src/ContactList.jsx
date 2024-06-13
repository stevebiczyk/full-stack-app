import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ContactList;
// The ContactList component receives the contacts prop and renders a table with the contact information. The table has columns for the first name, last name, email, phone, and actions. The actions column contains buttons for updating and deleting the contact. The map function is used to iterate over the contacts array and generate a table row for each contact.

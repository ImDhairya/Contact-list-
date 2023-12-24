import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function ContactList(props) {
  const { contact, removeContact } = props;

  const contactList = contact.map((val) => {
    return (
      <div className="contacts">
        <div style={{ marginLeft: "2px" }}>{val.data.name}</div>
        <div className="email"> {val.data.email}</div>
        <span onClick={() => removeContact(val.id)}>
          {" "}
          <DeleteIcon />{" "}
        </span>
      </div>
    );
  });
  return (
    <>
      <div className="ContactsHeader">Contact List</div>
      <div> {contactList} </div>
    </>
  );
}

export default ContactList;

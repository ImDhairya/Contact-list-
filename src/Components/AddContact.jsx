import React, { useState } from "react";
import Header from "./Header";

function AddContact({ addContact }) {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleAdd = () => {
    if (contactData.name === "" || contactData.email === "") {
      alert("Please fill all the details ");
      return;
    }
    addContact(contactData)
    setContactData({name: '', email : ''})
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
  };
  return (
    <div className="formHeader">
      <div className="add-contact">AddContact</div>
      <form action="">
        <label htmlFor="">Name:</label> <br />
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Email:</label> <br />
        <input
          type="email"
          placeholder="Enter Email "
          name="Email"
          value={contactData.email}
          onChange={handleChange}
        />{" "}
        <br />
      </form>
      <button className="btn" onClick={handleAdd}>
        Add contact
      </button>
    </div>
  );
}

export default AddContact;

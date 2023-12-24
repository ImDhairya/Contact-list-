import { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import uuid4 from "uuid4";

function App() {
  const localStorageKey = "contact";
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  // const [useLocalStorage, setUseLocalStorage]  fds

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);

  const removeContact = (id) => {
    const updatedList = contact.filter((val) => {
      return val.id !== id;
    });
    setContact(updatedList);
  };

  const addContact = (data) => {
    setContact([...contact, { id: uuid4(), data }]);
  };

  return (
    <>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contact={contact} removeContact={removeContact} />
    </>
  );
}

export default App;

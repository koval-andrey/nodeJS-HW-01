const fs = require("fs").promises;
//const contactsPath = require("./db/contactsPath");
const getAllContacts = require("./db/getAllContacts");
const updateContacts = require("./db/updateContacts");
const { v4 } = require("uuid");

const listContacts = async () => {
  try {
    const contacts = await getAllContacts();
    console.table(contacts);
  } catch (error) {
    error.message = "Cannot read contacts";
    throw error;
  }
};
const getContactById = async (id) => {
  try {
    const contacts = await getAllContacts();
    const findContact = contacts.find((item) => itr.id.toString() === id);
    if (!findContact) {
      throw new Error("Id incorrect");
    }
    console.table(findContact);
    return findContact;
  } catch (error) {
    throw error;
  }
};

const addContact = async (name, email, phone) => {
  const newContact = { id: v4(), name, email, phone };
  try {
    const contacts = await getAllContacts();
    const newContacts = [...contacts, newContact];
    updateContacts(newContacts);
    console.table(newContacts);
  } catch (error) {
    throw error;
  }
};

const removeContact = async (id) => {
  try {
    const contacts = await getAllContacts();
      const index = contacts.findIndex((item) => item.id.toString() === id);
    if (index === -1) {
      throw new Error("Id incorrect");
    }
    const filteredContacts = contacts.filter(
      (item) => item.id.toString() !== id
    );
      updateContacts(filteredContacts);
      console.table(filteredContacts);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};

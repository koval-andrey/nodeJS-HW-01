const fs = require("fs").promises;

const contactsPath = require("./contactsPath");

const updateContacts = async (contacts) => {
  const str = JSON.stringify(contacts);
  await fs.writeFile(contactsPath, str);
};

module.exports = updateContacts;

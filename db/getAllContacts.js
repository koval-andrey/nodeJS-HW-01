const fs = require("fs").promises;
const contactsPath = require("./contactsPath");

const getAllContacts = async () => {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
};

module.exports = getAllContacts;

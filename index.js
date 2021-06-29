const argv = require("yargs").argv;

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

(async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        const contacts = await listContacts();
        console.table(contacts);
        break;

      case "get":
        const getContact = await getContactById(Number(id));
        console.table(getContact);
        break;

      case "add":
        const add = await addContact(name, email, phone);
        break;

      case "remove":
        const del = await removeContact(Number(id));
        console.log(`contact successfully removed`);
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error);
  }
})(argv);

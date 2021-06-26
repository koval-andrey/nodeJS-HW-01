const {v4} = require("uuid");

const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const addContact = async(obj)=>{
    const newContact = {...obj, id: v4()};
    try {
        const contacts = await listContacts();
        const newContacts = [...contacts, newContact];
        await updateContacts(newContacts);
        return newContact;
    }
    catch(error){
        throw error;
    }
}

module.exports = addContact;
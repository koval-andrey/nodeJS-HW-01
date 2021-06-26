const listContacts = require("./listContacts");

const getContactById = async (id)=> {
    try {
        const contacts = await listContacts();
        const findContact = contacts.find(item => item.id === id);
        if(!findContact) {
            throw new Error("Id incorrect");
        }
        return findContact;
    } 
    catch (error) {
        throw error;
    }
}

module.exports = getContactById;
const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const removeContact = async(id)=>{
    try {
        const contacts = await listContacts();
        const index = contacts.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error("Id incorrect");
        }
        const filteredContacts = contacts.filter(item => item.id !== id);
        await updateContacts(filteredContacts);
    } catch (error) {
        throw error;
    }
}

module.exports = removeContact;
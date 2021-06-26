const argv = require('yargs').argv;
//const { listContacts, getContactById, addContact, removeContact } = require('./db');
function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':
            listContacts()
            console.log('list')
            break;

        case 'get':
            getContactById(id)
            console.log('id',id)
            break;

        case 'add':
            addContact(name, email, phone)
            console.log( 'name email phone', name, email, phone)
            break;

        case 'remove':
            removeContact()
            console.log('id',id)
             break;

             default:
                console.warn('\x1B[31m Unknown action type!');

    }
}

invokeAction(argv);

// name is a string
// phone is a string
// address is an object (street string, city string, state)
function newContact(name, phone, address) {
    return {
        name: name,
        phone: phone,
        address: {
            street: address.street,
            city: address.city,
            state: address.state,
        },
        added: new Date(),
        id: undefined,
    };
}


function newContactList() {
    return {
        list: [],
        id: Date.now(),
        add: function(contact) {
            contact.addedToList = new Date();
            this.list.push(contact);
        },
        find: function(string) {
            for (var i = 0; i < this.list.length; i++) {
                return this.list[i];
            }
        },
        get: function(number) {
            return this.id;
        },        
    };
}

var john = newContact('John Doe', '845 765 1881', {
    street: '101 Pennsylvania Ave',
    city: 'Seattle',
    state: 'WA',
});
var jane = newContact('Jane Doe', '890 433 1334', {
    street: '283 Whitehall Road',
    city: 'Charlotte',
    state: 'NC',
});
var jack = newContact('Jack Brown', '703 234 1224', {
    street: '2345 Denon Hills',
    city: 'Rock Hill',
    state: 'SC',
});

var list = newContactList();
list.add(john);
list.add(jane);
list.add(jack);


/*
lists.add(contact);

var list = newContactList();

list.add(contact);
list.add(contact2);

// this should return an array containing one contact.
list.find('Jane');

// this should return an array containing two contacts.
list.find('Doe');*/
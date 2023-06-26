const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/coding_ninjas');

}

console.log('connected to :: Database');



// // require the library
// const mongoose = require('mongoose');

// // connect to the database
// mongoose.connect('mongodb://localhost/contacts_list_db');

// //acqure the connection (to check if it successfull)
// const db = mongoose.connection;

// //error
// db.on('error', console.error.bind(console, 'error connection to db'));

// // up and running then print the message
// db.once('open', function () {
//     console.log("Successfully connected to the database");
// });
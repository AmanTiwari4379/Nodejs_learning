//importing the file system module
const fs = require('fs');

//Writing to a file synchronously
//fs.writeFileSync('file.txt', "Name = 'Aman Tiwari' Age = 23");

//Synchronous read
// console.log('1. Starting sync read...');
// const data = fs.readFileSync('file.txt' , 'utf-8');
// console.log('2. Data read from file: ', data);
// console.log('3. Ending sync read...');

//Asynchronous read
// console.log('1. Starting async read...');
// fs.readFile('file.txt' , 'utf-8' , (err, data) => {
//     if(err){
//         console.log('Error reading file: ', err);
//     } else {
//         console.log('2. Data read from file: ', data);
//     }
// });
// console.log('3. Ending async read...');
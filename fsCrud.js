const { log } = require('console');
const fs = require('fs');

// Create a file with content
//fs.writeFileSync("files/apple.txt", "An apple a day keeps doctors away");
//fs.writeFileSync("files/banana.txt", "It is healthy and cheap fruit");

//Delete file 
//fs.unlinkSync("files/apple.txt");

//Read file content
// const data = fs.readFileSync("files/apple.txt", "utf-8");
// console.log(data);

//Append content
//fs.appendFileSync("files/apple.txt", " and save your money on buying from expensive medicines.");

const operation = process.argv[2];
if(operation == 'write'){
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = "files/"+name+".txt"
    //console.log(operation, name, content);
    fs.writeFileSync(fullName, content);
}else if(operation == 'read'){
    const name = process.argv[3];
    const fullName = "files/"+name+".txt"
    let data = fs.readFileSync(fullName, "utf-8");
    console.log(data)
}else if(operation == 'update'){
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = "files/"+name+".txt"
    let data = fs.appendFileSync(fullName, content);
    console.log(data);
}else if(operation == 'delete'){
    const name = process.argv[3];
    const fullName = "files/"+name+".txt"
    fs.unlinkSync(fullName);
}else{
    console.log("Operation not found");
}
const fs = require('fs');

fs.readFile('./text/Lucas.txt', 'utf8', (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
});
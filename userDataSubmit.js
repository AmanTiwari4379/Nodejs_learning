const queryString = require('querystring');

function userDataSubmit(req, res){
    let dataBody = [];
    req.on('data', (chunk)=> {
        dataBody.push(chunk);
    });

    req.on('end', ()=> {
        let rawData = Buffer.concat(dataBody).toString();
        let readableData = queryString.parse(rawData);
        let dataString = "My name is "+ readableData.name + " and my email id is "+ readableData.email;
        console.log(dataString);
    })

    res.write(`<h2>You can get data from user from here </h2>`);
}
module.exports = userDataSubmit;
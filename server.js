const fs = require('fs');
const _ = require('lodash');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/check', (req, res) => {
    const jsonString = fs.readFileSync("./clients.json")
    const clients = JSON.parse(jsonString);
    clients.forEach(client =>{
        client.employees.forEach(employee =>{
            if(_.isEqual(employee,req.body)){
                res.send({eligible: true});
            }
        })
    })
    res.send({eligible: false});
});

app.listen(8080,()=>{console.log('listening on port 8080')});

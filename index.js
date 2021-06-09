const express = require('express');
const {spawn} = require('child_process');
const app = express();
const port = 3000;
const path = require('path');


const bodyConfig = {
    limit: "10mb",
    extended: true
};

app.use(express.urlencoded(bodyConfig));
app.use(express.json(bodyConfig));
app.use(express.static('public'));

const middleware = require("./middleware");
app.use(middleware.cors);

app.get('/colors', (req, res) => {
 var dataToSend;

 // spawn new child process to call the python script
 const python = spawn('python3', ['getCoolors.py']);

 // collect data from script
 python.stdout.on('data', function (data) {
  console.log('Pipe data from python script ...');
  dataToSend = JSON.parse(data.toString());
 });

 // in close event we are sure that stream from child process is closed
 python.on('close', (code) => {
 console.log(`child process close all studio with code ${code}`);

 // send data to browser
 res.send(dataToSend)
 });

})

// can alias, define a route, leave alone..
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','party.html'));
})

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.listen(process.env.PORT || 3000);

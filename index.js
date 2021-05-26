const express = require('express');
const {spawn} = require('child_process');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
 var dataToSend;
 
 // spawn new child process to call the python script
 const python = spawn('python3', ['getCoolors.py']);
 
 // collect data from script
 python.stdout.on('data', function (data) {
  console.log('Pipe data from python script ...');
  dataToSend = data.toString();
 });

 // in close event we are sure that stream from child process is closed
 python.on('close', (code) => {
 console.log(`child process close all studio with code ${code}`);
 
 // send data to browser
 res.send(dataToSend)
 });
 
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','party.html'));
})

app.use(express.static('public'))
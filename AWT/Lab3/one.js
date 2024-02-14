// function printDateTime(){
//     return new Date()
// }

// module.exports = printDateTime;

const express = require('express');
const serveIndex = require('serve-index');

const app = express()
app.use(express.static(__dirname + '/public'));
app.use("/route",serveIndex(__dirname + '/public')).get((req,res)=> res.send("Hello World"));


app.listen(3000, () => {
    console.log('Server started at port 3000');
});
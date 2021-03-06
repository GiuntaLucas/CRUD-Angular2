var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('.'));

app.get('/', function(req, res){
    res.sendFile(path.join('./index.html'));
})

console.log('Server up and running on http://localhost:3000/');
app.listen(3000);
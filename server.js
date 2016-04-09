//test comment only visible on my 'yazeed' branch
var express = require('express'),
    app = express();

var PORT = 8888;

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT);

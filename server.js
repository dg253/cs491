'use strict';

let express = require('express'),
    app = express();

const PORT = 8080;

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT);
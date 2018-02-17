// var http = require('http');

// var server = http.createServer(function(request, response) {

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");

// });

// var port = process.env.PORT || 3000;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);
var express = require('express');
var app = express();

app.set("view engine", "pug");
app.use(express.static('public'));
app.listen(3000, _ => {
    console.log('listening on port 3000');
});

app.get('/', (req, res) => {
    res.status(200).render('index');
});
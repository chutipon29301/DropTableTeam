var express = require('express');
var app = express();

app.set("view engine","pug");
app.use(express.static('public'));
app.listen(3000, _ => {
    console.log('listening on port 3000');
});


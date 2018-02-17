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
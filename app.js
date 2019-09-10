const express = require('express');
var path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '\\Index.html');
});

app.listen(3000, () => {
    console.log("App is running on 3000");
})
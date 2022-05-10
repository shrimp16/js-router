const express = require('express');
const app = express();

app.listen(12345, () => {
    console.log("Server on port 6000")
});

app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
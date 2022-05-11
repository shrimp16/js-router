const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log("Server on port 5000")
});

app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
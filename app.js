const express = require('express');

const app = express();

let counter = 0;

app.get('/', (req, res) => {
    res.send(`Current Counter Value: ${counter}`);
})

app.get('/increment', (req, res) => {
    counter++;
    res.send(`Counter Incremented!! New Value: ${counter}`);
})

// start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port 3000")
})
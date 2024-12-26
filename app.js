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

module.exports = app;
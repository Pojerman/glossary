const express = require('express');
const createError = require('http-errors');
const app = express();
const port = 5000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.get('/glossary', (req, res) => {
    const data = require('./data/glossary.json');
    res.send(data);
})

app.get('/mindmap', (req, res) => {
    const data = require('./data/mindMap.json');
    res.send(data);
})

app.listen(port, () => {
    console.log(`serve is listening on ${port}`)
})

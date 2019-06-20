const connection = require("../mysql.conf").connection;

const express = require("express");
const app = express();

app.get('/noticia', (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM noticias', (error, results, fields) => {
        if (error) {throw error};
        connection.end();
        res.json(results);
    });
});

module.exports = app;
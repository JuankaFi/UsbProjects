const express = require('express');
const axios = require('axios');

const app = express();

app.get('/deporte', (req, res) => {
    var noticias = [];
    var data = [];
    axios.get('http://localhost:8889/noticia')
    .then(response => {
        //noticias = JSON.parse(response.data);
        noticias = response.data;
        //console.log(JSON.stringify(response.data));
        res.render('deporte/index', {
            title: "Informate | Deportes",
            noticias
            
        });
        console.log(noticias);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
});

module.exports = app;
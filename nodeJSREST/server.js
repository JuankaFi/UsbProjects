const express = require('express');
const path = require('path');
const app = express();
const port = 8889;

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/user'));
app.use(require('./routes/noticia'));

app.listen(port, function () {
  console.log(`Server is running at http://localhost:${port}`);
});
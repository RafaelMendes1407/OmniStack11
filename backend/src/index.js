const express = require('express');
const routes = require('./routes');
//const cors = require('cors');

const app = express();

//app.use(cors)
app.use(express.json());
app.use(routes);
console.log("Backend Iniciado!")

app.listen(3333);
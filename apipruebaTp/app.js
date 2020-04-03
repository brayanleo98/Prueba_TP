const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const empleRouts = require('./routes/empleado');

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use('/api', empleRouts);

module.exports = app;
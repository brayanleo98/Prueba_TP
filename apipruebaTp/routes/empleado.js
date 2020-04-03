const express = require('express');
const emp = require('../controller/empleado');
const app = express();


app.post('/registrar', emp.create);
app.get('/ver-empleados', emp.find);

module.exports = app;
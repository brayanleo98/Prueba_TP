const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let empleadoSchema = new Schema({
    documento: Number,
    nombres: String,
    apellidos: String,
    fechaIni: Date,
    fechaFin: Date,
    iniTurno: String,
    finTurno: String,
    iniExtra: String,
    finExtra: String,
    motivoExtra: String
})

module.exports = mongoose.model('Empleados',empleadoSchema)
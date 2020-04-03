const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;
mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if(err){
        console.log('Error al conectarse a la base de datos', err);
    } else {
        app.listen(port,()=>{
            console.log('Conexion en el puerto',port);
        })
    }
});
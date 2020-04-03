const empleado = require('../modules/empleado')

const emple = {
    create: function (req, res) {
        let params = req.body
        let newEmple = new empleado({
            documento: params.documento,
            nombres: params.nombres,
            apellidos: params.apellidos,
            fechaIni: params.fechaIni,
            fechaFin: params.fechaFin,
            iniTurno: params.iniTurno,
            finTurno: params.finTurno,
            iniExtra: params.iniExtra,
            finExtra: params.finExtra,
            motivoExtra: params.motivoExtra
        })
        newEmple.save((err,emp) =>{
            if(err) return res.send({
                statusCode: 500,
                message: 'Error al guardar empleado'
            })
            return res.send({statusCode: 200, empleado: emp})
        })
    },

    find: function(req,res){
        empleado.find((err,emp) => {
            if(err || !res){
                return res.send({statusCode: 500, message: 'Error al buscar empleados'});
            }
            return res.send({
                message: 'succes',
                empleados: emp
            })
        })
    }
}
module.exports = emple;
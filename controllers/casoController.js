const connection = require('../connectionDb');

exports.getCasoById = function (req, res) {
    let idCaso = req.params.id;
    let itinerario = req.query.itinerario;
    console.log('ITINERARIO: ', itinerario);
    let query = `SELECT * FROM casos JOIN itinerario_caso ON casos.id = itinerario_caso.id_caso WHERE id_itinerario = ${itinerario} AND casos.id = ${idCaso}`;

    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error(error);
        } else {
            res.json({
                status: 200,
                data: results,
            });
        }
    });
};


exports.insertSelectedOptionByCaso = (req, res) => {
    console.log("INSERTANDO EL RESULTADO DEL CASO");
    let caso = req.body.caso;

    console.log(caso);


    const query = `insert into partida_caso(id_partida,id_caso,opcion) values(?,${caso.idCaso},${caso.name})`;
    connection.query(query, (err, results, filed) => {
        if (err) {
            console.log("ERROR AL INSERTAR EL RESULTADO DEL CASO");
        } else {
            res.json({
                status: 200,
                data: results,
            });
        }
    });
} 

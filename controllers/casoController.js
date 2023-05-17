const connection = require('../connectionDb');

exports.getCasoById = function (req, res) {
    let idCaso = req.params.id;
    let itinerario = req.query.itinerario;
    console.log('ITINERARIO: ', itinerario);
    let query = `SELECT * FROM caso JOIN itinerario_caso ON caso.id_Caso = itinerario_caso.id_caso WHERE id_Itinerario = ${itinerario} AND caso.id_caso = ${idCaso}`;

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




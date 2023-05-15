const connection = require('../connectionDb');

exports.getCasoById = function (req, res) {
    let idCaso = req.params.id;
    let query = `SELECT * FROM caso JOIN itinerario_caso ON caso.id_Caso = itinerario_caso.id_caso WHERE id_Itinerario = 1 AND caso.id_caso = ${idCaso}`;

    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Resultado: ', results);
            console.log('Query: ', query);
        }
    });
};

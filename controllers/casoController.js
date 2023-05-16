const connection = require('../connectionDb');

exports.getCasoById = function (req, res) {
    let idCaso = req.params.id;
    let query = `SELECT * FROM caso JOIN itinerario_caso ON caso.id_Caso = itinerario_caso.id_caso WHERE id_Itinerario = 1 AND caso.id_caso = ${idCaso}`;

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

exports.getCasoPasivaById = function (req, res) {
    let idCaso = req.params.id;
    let query = `select texto_Redencion_Buena_Pasiva,texto_Redencion_Mala_Pasiva,texto_Redencion_Pasiva from caso join itinerario_caso on caso.id_Caso=itinerario_caso.id_caso where id_Itinerario=1 and caso.id_caso=${idCaso};`

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
}

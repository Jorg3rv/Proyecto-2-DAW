const connection = require('../connectionDb');
const crypto = require('crypto');
const jwt = require("jsonwebtoken");


function calcularHashSHA256(string) {

    const hash = crypto.createHash('sha256');


    hash.update(string);


    const hashHex = hash.digest('hex');


    return hashHex;
}

function generarTokenJWT(id) {
    const token = jwt.sign({ profeId: id }, 'login_secret_profe', { expiresIn: '14d' });
    return token;
}

exports.checkLogin = (req, res, next) => {

    const email = req.query.email
    const password = req.query.password


    const hash = calcularHashSHA256(password);

    const query = `select * from profesores where email='${email}' and contrasena='${hash}';`


    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error(error);
        } else {
            if (results.length > 0) {
                let token = generarTokenJWT(results[0].id);
                req.session.token = token;
                res.json({
                    status: 200,
                    data: {
                        name: results[0].nombre,
                    }
                });
            } else {
                res.json({
                    status: 404,
                    data: {
                        message: 'Usuario no encontrado'
                    }
                });
            }
        }
    });

}


exports.checkSession = (req, res, next) => {
    const token = req?.session?.token;
    if (token) {
        jwt.verify(token, 'login_secret_profe', (err, decoded) => {
            if (err) {
                res.json({
                    status: 401,
                    data: {
                        message: 'Token inválido'
                    }
                });
            } else {
                res.json({
                    status: 200,
                    data: {
                        message: 'Token válido'
                    }
                });
            }
        });
    } else {
        res.json({
            status: 401,
            data: {
                message: 'Token inválido'
            }
        });
    }
}

exports.logout = (req, res, next) => {
    delete req.session.token;
    res.json({
        status: 200,
        data: {
            message: 'Logout'
        }
    });
}
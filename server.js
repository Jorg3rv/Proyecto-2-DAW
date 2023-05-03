const express = require('express');
const connection = require('./connectionDb');
require('dotenv').config();



connection.connect(function (error) {
    if (error) {
        console.error('Error de conexión: ' + error.stack);
        process.exit(1);
    }

    console.log('Conectado a la base de datos MySQL.');
});





const app = express();

const port = process.env.PORT || 5000;

if (!port) {
    console.error('Please set PORT in .env file');
    process.exit(1);
}


app.listen(port, () => {

    console.log(`Server is running on port: ${port}`);
})


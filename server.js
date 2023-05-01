const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

if (!port) {
    console.error('Please set PORT in .env file');
    process.exit(1);
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
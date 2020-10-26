const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server lsitening on ${PORT}`);
});
const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();

//use of parser middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//landing route
app.get('/', (req, res) => {
    console.log("welcome to the sah API");
    res.status(200).send();
});

//routes
app.use('/rooms', require('./routes/sahRoomDetails'));
app.use('/tariff', require('./routes/tariff'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server lsitening on ${PORT}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const chatRoute = require('./routes/chatRoute');

const app = express();
const cors = require('cors');

const server = http.createServer(app);
const PORT = 3001 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use((err, req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested, Content-Type, Accept')
    next(err);
});

app.use('/api', chatRoute);

server.listen(3001, () => {
    console.log(`App listening on port ${PORT}`);
});
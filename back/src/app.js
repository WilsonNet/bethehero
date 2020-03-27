const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

/**
 * DRIVER: SELECT * from users
 * Query Builder: table('users').select('*').where()
 */

module.exports = app;

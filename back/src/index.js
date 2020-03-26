const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * DRIVER: SELECT * from users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);

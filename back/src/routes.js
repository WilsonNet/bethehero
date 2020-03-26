const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Query Param: Filtros, paginação
 * Routes Params: Parâmetros pra identificar recursos, geralmente usado ara único recurso
 * Body - Corpo da req, criar ou alterar
 */


routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;

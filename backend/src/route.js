//IMPORTACOES IMPORTANTE
const express = require('express');
const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions',sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

/**EXPORTANDO UMA VARIAVEL PARA OUTRAS CLASSES */
module.exports = routes;
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rotas e Recursos
 */

 /**
  * Métodos HTTP
  * GET -> buscar informação
  * POST -> criar uma informação no backend
  * PUT -> alterar uma informação no backend
  * DELETE -> apagar uma informação
  */


app.listen(3333);


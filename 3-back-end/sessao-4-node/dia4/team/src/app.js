const express = require('express');
require('express-async-errors'); // não precisa definir uma variável
const existingId = require('./middleware/existingId');
const validateTeam = require('./middleware/validateTeam');
const apiCredentials = require('./middleware/apiCredentials');
const app = express();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());


app.get('/teams', (req, res) => res.json(teams));
app.use(apiCredentials);

app.get('/teams/:id',existingId ,(req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
    res.json(team);

});

app.post('/teams', (req, res) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
  } else {
    res.sendStatus(400);
  }
});

app.put('/teams/:id',existingId, validateTeam ,(req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);

});

app.delete('/teams/:id',existingId ,(req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

    const index = teams.indexOf(team);
    teams.splice(index, 1);

    res.sendStatus(204);
});

module.exports = app;
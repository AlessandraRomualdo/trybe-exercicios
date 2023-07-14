const express = require('express');

const app = express();

app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/', (req, res) => res.status(200).json({message: 'Olá Mundo!'}));
app.get('/teams', (req, res) => res.status(200).json({teams}));

// adicionar um time
app.post('/teams', (req, res) => {
  const newTeam = {...req.body};
  teams.push(newTeam);
  res.status(201).json({team: newTeam});
});

//atualizar um time
app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    return res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

//deletar um time
app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

//listar um time
app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const team = teams.find((team) => team.id === Number(id));

  if (!team) {
    return res.status(404).json({ message: 'Team not found' });
  }

  res.status(200).json({ team });
});
module.exports = app;
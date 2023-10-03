const express = require('express');
const fs = require('fs').promises;
const path = path('path');


const app = express();

const talkersPath = path.resolve(__dirname, 'talker.json');
const generateTokem = require('./utils/generateToken');
const emailValidate = require('./middlewares/emailValidate')

// função para leitura do arquivo json
const readFile = async () => {
  const data = await fs.readFile(talkersPath, 'utf-8');
  return JSON.parse(data);
}
// req 1 
app.get('/talker', async (_req, res) => {
  const talkers = await readFile();
  res.status(200).json(talkers)
});

// req 2
app.get('/talker/:id', async (req, res) => {
  try {
    const { id } = req.body;
    const talker = await readFile();
    const filteredTalker = talker.filter((t) => t.id === Number(id));
    res.status(200).json(filteredTalker)
  } catch {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
});

// req 3
app.post('/login', emailValidate, () => {
  const token = generateTokem()
  res.status(200).json({token})
});

// req 4
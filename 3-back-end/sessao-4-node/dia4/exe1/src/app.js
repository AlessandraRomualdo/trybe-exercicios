const express = require('express');
const validateName = require('./middlewares/validadeName');
const validadePrice = require('./middlewares/validadePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateDate = require('./middlewares/validateDate');
const validateRating = require('./middlewares/validateRating');
const validateDifficut = require('./middlewares/validateDifficut');
const generateToken = require('./utils/generateTokem');
const auth = require('./middlewares/auth')

const app = express();
app.use(express.json());



app.post('/activities', auth, validateName, validadePrice, validateDescription, validateDate, validateRating, validateDifficut, (_req, res) => {
  res.status(201).json({message: 'Atividade cadastrada com sucesso!'})

});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({message: 'campos ausentes!'});
  }
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = app;
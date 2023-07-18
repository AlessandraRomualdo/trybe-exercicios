const express = require('express');
const validateName = require('./middlewares/validadeName');
const validadePrice = require('./middlewares/validadePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateDate = require('./middlewares/validateDate');
const validateRating = require('./middlewares/validateRating');
const validateDifficut = require('./middlewares/validateDifficut')

const app = express();
app.use(express.json());



app.post('/activities', validateName, validadePrice, validateDescription, validateDate, validateRating, validateDifficut, (_req, res) => {
  res.status(201).json({message: 'Atividade cadastrada com sucesso!'})

})

module.exports = app;
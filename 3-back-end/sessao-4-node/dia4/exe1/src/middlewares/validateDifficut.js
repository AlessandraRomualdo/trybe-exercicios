const validateDifficut = () => {
  const { difficulty } = req.body.description;
  const allDifficulty = ['facil', 'dificil', 'normal']
  if (!allDifficulty.includes(difficulty)) {
    return res.status(400).json(
      { message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' })
  }
  next();
}

module.exports = validateDifficut;
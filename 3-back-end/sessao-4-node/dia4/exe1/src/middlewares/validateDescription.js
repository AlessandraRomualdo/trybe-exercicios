const validateDescription = (req, res, status) => {
  const { description: { createAt, rating, difficulty } } = req.body;
  if (!description) res.status(400).json({ message: 'O campo description é obrigatório' });
  if (!createAt) res.status(400).json({ message: "O campo createdAt é obrigatório" });
  if (!rating) res.status(400).json({message: 'O campo rating é obrigatório'});
  if (!difficulty) res.status(400).json({message: 'O campo difficulty é obrigatório'});
  next();
}

modules.exports = validateDescription;
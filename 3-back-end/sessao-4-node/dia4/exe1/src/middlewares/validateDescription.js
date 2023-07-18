const validateDescription = (req, res, status) => {
  const { description: { createAt, rating, difficulty } } = req.body;
  if (!description) return res.status(400).json({ message: 'O campo description é obrigatório' });
  if (!createAt) return res.status(400).json({ message: "O campo createdAt é obrigatório" });
  if (!rating) return res.status(400).json({message: 'O campo rating é obrigatório'});
  if (!difficulty) return res.status(400).json({message: 'O campo difficulty é obrigatório'});
  next();
}

module.exports = validateDescription;
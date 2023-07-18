const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if(!price) return res.status(400).json({ message: "O campo price é obrigatório" });
  if (price >= 0 || typeof price !== 'number') return res.status(400).json({ message: 'O campo price deve ser um número maior que 0.'});
  next();
}

module.exports = validatePrice;
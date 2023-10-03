const emailValidate = (req, res, next) => {
 const { email } = req.body;
 const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
 const emailValido = emailRegex.test(email);
 if (!email) {
  return res.status(400).json({ message: 'O campo \"email\" é obrigatório' });
 }
 if (!emailValido) {
  return res.status(400).json({ message: 'O \"email\" dever ter o formato \"email@email.com\"' });
 }
 next();
};

module.exports = emailValidate;
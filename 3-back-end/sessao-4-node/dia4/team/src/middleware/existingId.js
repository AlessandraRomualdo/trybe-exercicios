const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (teams.some((t) => t.id === id)) {
    next();
  } else {
    res.sendStatus(404).json({message: 'Time não encontrado'})
  }
}


module.exports = existingId;
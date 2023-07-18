const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    console.error(`Arquivo não pode ser lido: ${e}`);
  }
};

//ex5 - listar um filme por id
app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const movie = movies.find((movie) => movie.id === Number(id));

    res.status(200).json(movie)
  } catch (e) {
    res.status(500).send({message: e.message})
  }

})

//ex6 criar end pont com get para listar todos os filmes

app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json(movies)
  } catch (e) {
    res.status(404).send({message: e.message})
  }
})

//ex7 criar um endpoint com post para cadastrar um novo filme
app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const newList = JSON.stringify([...movies, newMovie])
    res.status(201).json(newList);

    await fs.writeFile(moviesPath, newList);

  } catch (e) {
    res.status(500).send({message: e.message})

  }
})

//ex8 criar um endpoint com put para editar informações de um filme
app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile();
    const index = movies.findIndex((movie) => movie.id === Number(id));
    movies[index] = {id: Number(id), movie, price}

    const allMovies  = JSON.stringify(movies, null, 2);

    res.status(200).json(movies[index]);
    await fs.writeFile(moviesPath, allMovies);

  } catch (e) {
    res.status(500).send({message: e.message});

  }
});

//ex9 cria um endpoind para deletar um filme

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const delIndex = movies.findIndex((movie) => movie.id === Number(id));
    movies.splice(delIndex, 1);

    await fs.writeFile(moviesPath, JSON.stringify(movies))
    res.status(204).end();
  } catch (e) {
    res.status(500).send({message: e.message});
  }
})

//ex10

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readFile(); 

    if (q) {
      const filteredMovies = movies.filter((mov) => mov.movie.includes(q))
      return res.status(200).json(filteredMovies)
    }
    res.status(200).end();
    
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;
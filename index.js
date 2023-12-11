const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const recipes = require('./data/recipe-info.json');

// app.use(cors());
const corsConfig = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.get('/recipes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    {
        const recipesData = recipes.filter(recipe => recipe.id === id);
        res.send(recipesData);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
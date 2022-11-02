
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const pokemon = require('./models/pokemon.js')
const PORT = 3500

app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));

//INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemons: pokemon,
    })
})




//SHOW



//listener
app.listen(PORT)
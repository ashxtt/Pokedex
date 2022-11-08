
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const pokemon = require('./models/pokemon.js')
const PORT = 3500

//Middleware//
app.use(express.urlencoded({extended : false}));
app.use(methodOverride("_method"));

//INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemons: pokemon,
    })
})

//NEW
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})

//PUT ROUTE TO UPDATE DATABASE
app.put('/pokemon/:id', (res, req)=>{
    let stats = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        speed: req.body.speed,
    }
    let newPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.type,
        stats: stats,
    }
    //pass params
    pokemon[req.params.id] = newPokemon
    res.redirect('/pokemon')
    
})

//CREATE
app.post('/pokemon', (req, res) => {
    let stats = {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        speed: req.body.speed,
    }
    let newPokemon = {
        name: req.body.name,
        img: req.body.img,
        type: req.body.type,
        stats: stats,
    }
    pokemon.push(newPokemon)
    res.redirect('/pokemon')
})


//DELETE
app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id,1)
    res.redirect('/pokemon')
})

//UPDATE
app.put("/pokemon/:id", (req, res) => {
    pokemons: pokemon[req.params.id] = req.params.id
    res.redirect("/pokemon")
})

//EDIT
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemons: pokemon[req.params.id],
        id: req.params.id,
    })
    
})

//SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemons: pokemon[req.params.id],
    })
})

//listener
app.listen(PORT)
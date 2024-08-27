const mongoose = require('mongoose');

const tipos = ['Fogo', 'Água', 'Grama', 'Elétrico', 'Psíquico', 'Gelo', 'Dragão', 
    'Fada', 'Veneno', 'Fantasma', 'Pedra', 'Terra',  'Inseto',
    'Lutador', 'Normal',  'Metal', 'Voador', 'Fantasma Noturno'];

const pokemonSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    numero: { type: Number, required: true },
    tipo: {
        type: String,
        enum: tipos, 
        required: true
    },
    imagem: { type: String, required: true }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;

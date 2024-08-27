const express = require('express');
const connectDB = require('./db');
const Pokemon = require('./modejs.js/pokemons.js'); 

const PORTA = 3330;
const app = express();

// Conecta a aplicação ao MongoDB
connectDB();

app.use(express.json());

// Rota para buscar todos os pokémons
app.get('/pokemons', async (req, res) => {
    try {
        const pokemons = await Pokemon.find(); 
        res.send(pokemons);
    } catch (error) {
        res.status(500).send('Erro ao buscar pokemons');
    }
});

// Rota para buscar Pokemon por ID

app.get ('/pokemons/:id', async (req, res) =>{
    try {
        const pokemons = await Pokemon.findById(req.params.id);

        if (!pokemons){
            return res.status(400).send('Pokemon não encontrado')
        }
        res.send(pokemons);
    } catch (error){
        res.status(500).send ('Erro interno do servidor');
    }
});

// Rota para atualizar pokemon por ID

app.put ('/pokemons/:id', async (req, res) => {
    try {
        const updatePokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true, //Valida os dados antes de atualizar
            
        });
        if (!updatePokemon){
            return res.status(400).send('Não foi possível atualizar os dados desse pokemon. Tente novamente.')
        }
        res.send(updatePokemon)
    } catch (error){
        res.status(500).send('Não foi possível atualizar Pokemon. Erro interno do servidor.')
    }
});

//Rota para deletar Pokemon

app.delete ('/pokemons/:id', async (req, res) => {
    try {
        const deletePokemon = await Pokemon.findByIdAndDelete(req.params.id);

        if (!deletePokemon){
            return res.status(400).send('Não foi possível remover esse pokemon. Tente novamente.')
        }
        res.send('Pokemon removido com sucesso!');
    } catch (error){
        res.status(500).send('Não foi possível remover esse pokemon. Erro interno do servidor.')
    }
});

// Rota para adicionar um novo pokemon
app.post('/pokemons', async (req, res) => {
    try {
        const { nome, numero, tipo } = req.body;

        if (!nome || !numero || !tipo) {
            return res.status(400).send('Campos nome, numero e tipo são obrigatórios');
        }

        const imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`;

        const pokemon = new Pokemon({ nome, numero, tipo, imagem });
        await pokemon.save();
        res.status(201).send(pokemon);
    } catch (error) {
        console.error('Erro ao adicionar Pokemon:', error);
        res.status(500).send('Erro ao adicionar Pokemon');
    }
});


// Iniciando o servidor
app.listen(PORTA, () => {
    console.log(`Servidor executando na porta ${PORTA}`);
});

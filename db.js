require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Conectado ao MongoDB Atlas com sucesso');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB Atlas:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

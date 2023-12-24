import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O campo "nome" é obrigatório.']
    },
    email: {
        type: String,
        required: [true, 'O campo "e-mail" é obrigatório.']
    },
    password: {
        type: String,
        required: [true, 'O campo "senha" é obrigatório.']
    },
})

// se já tiver criddo retorna: mongoose.models.users se ainda não tiver, ele cria mongoose.model('users', schema)
export default mongoose.models.users || mongoose.model('users', schema)
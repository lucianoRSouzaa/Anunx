import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O campo "nome" da categoria é obrigatório.'],
    },
    slug: {
        type: String,
        required: [true, 'O campo "slug" da categoria é obrigatório.'],
    }
})

export default mongoose.models.categories || mongoose.model('categories', schema)
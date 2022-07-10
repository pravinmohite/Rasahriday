const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    quantity: {
        type: Number,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    categoryId: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: false
    }
})

const QuestionAnswer = module.exports = mongoose.model('Product', ProductSchema)
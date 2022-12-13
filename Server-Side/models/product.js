const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    categoryId: {
        type: String,
        required: true
    },
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
    shlok: {
        type:String,
        required:false
    },
    references: {
        type:String,
        required:false
    },
    dosage: {
        type:String,
        required: false
    },
    indications: {
        type:String,
        required: false
    },
    contraIndications: {
        type:String,
        required: false
    },
    sanskritName: {
        type:String,
        required: false
    },
    botanicalName: {
        type:String,
        required: false
    },
    drugQuantity: {
        type:String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    stock: {
        type: Number,
        required: false
    }
})

const QuestionAnswer = module.exports = mongoose.model('Product', ProductSchema)
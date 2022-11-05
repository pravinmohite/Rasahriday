const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    categoryId: {
        type: Number,
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
    slok: {
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
    orderPlaced: {
        type: Boolean,
        required: false
    },
    orderAccepted: {
        type: Boolean,
        required: false
    }
})

const QuestionAnswer = module.exports = mongoose.model('Cart', CartSchema)
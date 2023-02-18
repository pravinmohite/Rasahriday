const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    categoryId: {
        type: String,
        required: false
    },
    userId:{
        type: String,
        required: true
    },
    userName: {
        type:String,
        required: true
    },
    userAddress: {
        type: String,
        required: false
    },
    userPhoneNumber: {
        type: String,
        required: false
    },
    productName: {
        type: String,
        required: true
    },
    productImages: {
        type: String,
        required: false
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
    },
    orderedDate:
    {
       type: String,
       required: false
    }
})

const Order = module.exports = mongoose.model('Order', OrderSchema)
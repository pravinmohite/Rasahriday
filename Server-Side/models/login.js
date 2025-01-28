const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: false
    },
    firstName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:false
    },
    lastName: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    pincode: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    },
    isPractitioner: {
        type: Boolean,
        require: false,
        default: false
    },
    regNumber: {
        type: String,
        require: false,
    }
})

const Login = module.exports = mongoose.model('Login', LoginSchema)
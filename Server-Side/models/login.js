const mongoose=require('mongoose');

const LoginSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
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
        required:true
    },
    lastName: {
        type: String,
        required: false
    },

    isAdmin: {
        type:Boolean,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    }
})

const Login=module.exports=mongoose.model('Login',LoginSchema)
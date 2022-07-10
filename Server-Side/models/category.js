const mongoose=require('mongoose');

const CategorySchema=mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:false
    }
})

const QuestionAnswer=module.exports=mongoose.model('Category',CategorySchema)
const mongoose=require('mongoose');

const BlogsSchema=mongoose.Schema({
    blogName:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:false
    }
})

const QuestionAnswer=module.exports=mongoose.model('Blogs',BlogsSchema)
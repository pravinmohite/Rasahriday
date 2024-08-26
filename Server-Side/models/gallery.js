const mongoose=require('mongoose');

const GallerySchema=mongoose.Schema({
    galleryName:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:false
    },
    galleryDesc:{
        type:String,
        required:true
    }
})

const QuestionAnswer=module.exports=mongoose.model('Gallery',GallerySchema)
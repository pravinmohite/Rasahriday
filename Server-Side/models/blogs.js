const mongoose = require('mongoose');

const BlogsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    aboutAuthor: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: true
    },
    slug: {
        type:String,
        required: true,
    },
    category: {
        type: String,
        required: false,
    }

})

const Blogs = module.exports = mongoose.model('Blogs', BlogsSchema)

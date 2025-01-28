const express = require('express');

var app = express();
const router = express.Router();

const upload = require('../middleware/upload');
const Blogs = require('../models/blogs');

const prepareBlogData = async (data) => {
    const title = data?.title?.toLowerCase();
    const count = await Blogs.find({ title: new RegExp(title, 'i') }).countDocuments();

    return {
        author: data.author,
        aboutAuthor: data.aboutAuthor,
        category: data.category || '',
        content: data.content,
        slug: `${title?.replace(/ /g, "_")}${count > 0 ? `_${count + 1}` : ''}`,
        title: data.title,
    };
}

router.post('/', upload.any(), async (req, res) => {
    try {

        const blogData = await prepareBlogData(req.body);

        let newBlog = new Blogs(blogData)

        newBlog.save((err, blog) => {
            if (err) {
                res.json({ msg: 'failed to add blog with err:' + err, blog });
            }
            else {
                res.json({ msg: 'blog added successfully' });
            }
        })
    } catch (err) {
      
        res.json({ msg: 'failed to add blog with err:' + err });

    }
});

router.get('/', (req, res, next) => {
    //res.send('retrieving the question answer list');
    Blogs.find((err, blogsList) => {
        res.json(blogsList);
    })
})

router.delete('/:id', (req, res, next) => {
    Blogs.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
})

router.patch('/:id', async (req, res, next) => {
    const blogData = await prepareBlogData(req.body);
    Blogs.updateOne({ _id: req.params.id }, {
        $set: blogData
    }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

router.get('/:id', async (req, res, next) => {
    try {
        const blog = await Blogs.findById(req.params.id);
        if (blog) {
            res.json(blog);

        } else {
            res.status(404).json(null);
        }

    } catch (e) {
        if (e) {
            res.json(e);
        }
    }

})

/* end crud for blogs */
module.exports = router;
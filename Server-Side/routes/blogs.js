const express = require('express');

var app = express();
const router = express.Router();

const upload = require('../middleware/upload');
const Blogs = require('../models/blogs');

router.post('/', upload.any(), async (req, res) => {
    try {

        console.log('req files', req.files);
        const title = req?.body?.title?.toLowerCase();
        console.log("===slug====", title);

        const count = await Blogs.find({title: new RegExp(title, 'i')}).countDocuments();
        console.log("===count====", count);
    
        let newBlog = new Blogs({
            title: req.body.title,
            category: req.body.category,
            content: req.body.content,
            category: req.body.category || '',
            author: req.body.author,
            slug: `${title?.replace(/ /g, "_")}${count > 0 ? `_${count + 1}` : ''}`
        })

        newBlog.save((err, blog) => {
            console.log("====blog", blog);

            if (err) {
                res.json({ msg: 'failed to add blog with err:' + err, blog});
            }
            else {
                res.json({ msg: 'blog added successfully' });
            }
        })
    } catch (err) {
        console.log("error", err)
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
    const title = req?.body?.title?.toLowerCase();
    console.log("===slug====", title);

    Blogs.updateOne({ _id: req.params.id }, {
        $set: {
            title: req.body.title,
            category: req.body.category,
            author: req.body.author,
            content: req.body.content,
            blogDesc: req.body.blogDesc,
            slug: title?.replace(/ /g, "_")
        }
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
const express = require('express');
const router = express.Router();
const model = require('./../models/blog');
const moment = require('moment');

router.post('/', (req, res, next) => {
    const blog = new model({
        name: req.body.name,
        title: req.body.title,
        body: req.body.body,
        dateCreated: moment().unix()
    });
    blog.save().then(model => {
        if (!model.errors) {
            res.json({ success: true, msg: 'Blog Post Added!' });
        } else {
            res.json({ success: false, msg: 'Failed to add blog post' });
        }
    });
});

router.get('/', (req, res, next) => {
    model.find({}, (err, blogs) => {
        res.json(blogs);
    });
});

router.get('/:name', (req, res, next) => {
    model.findOne({ name: req.params.name }, (err, blog) => {
        // console.log('got this stop yo', pitstop)
        res.json(blog);
    });
});

module.exports = router;

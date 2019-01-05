const express = require('express');
const router = express.Router();
const model = require('./../models/blog');
const moment = require('moment');
const fs = require('fs');

const marked = require('marked');
const renderer = new marked.Renderer();
const base64Img = require('base64-img');
const jsdom = require('jsdom');

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
    var posts = fs.readdirSync(__dirname + '/../blogPosts');
    posts = posts.map(post => {
        let file = JSON.parse(
            fs.readFileSync(
                __dirname + '/../blogPosts/' + post + '/info.json',
                'utf8'
            )
        );
        const thumbnail = base64Img.base64Sync(
            __dirname + '/../blogPosts/' + post + '/icon.jpg'
        );
        file.thumbnail = thumbnail;
        return file;
    });
    res.json({ posts: posts });
});

router.get('/:id', (req, res, next) => {
    var posts = fs.readdirSync(__dirname + '/../blogPosts');
    posts = posts.forEach(post => {
        let info = JSON.parse(
            fs.readFileSync(
                __dirname + '/../blogPosts/' + post + '/info.json',
                'utf8'
            )
        );
        if (info.id === req.params.id) {
            var md = fs.readFileSync(
                __dirname + '/../blogPosts/' + post + '/index.md',
                'utf8'
            );
            return (md = marked(md, (err, data) => {
                var dom = new jsdom.JSDOM(data);
                let images = dom.window.document.querySelectorAll('img');
                images.forEach(image => {
                    if (
                        image.attributes.src.value.indexOf('https://') < 0
                    ) {
                        image.attributes.src.value = base64Img.base64Sync(
                            __dirname +
                                '/../blogPosts/' +
                                post +
                                '/' +
                                image.attributes.src.value
                        );
                    }
                });
                res.json({
                    info: info,
                    content: dom.serialize()
                });
            }));
        }
    });
});

module.exports = router;

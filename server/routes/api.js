const express = require('express');
const router = express.Router();
const pitstops = require('./pitstop');
const static = require('../../dist/nomadpitstop/server');
const blog = require('./blog');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});
router.use('/pitstops', pitstops);
router.use('/blog', blog);
router.use('/static', static);

module.exports = router;
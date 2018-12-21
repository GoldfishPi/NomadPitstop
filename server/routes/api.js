const express = require('express');
const router = express.Router();
const pitstops = require('./pitstop');
const blog = require('./blog');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});
router.use('/pitstops', pitstops);
router.use('/blog', blog);

module.exports = router;
const express = require('express');
const router = express.Router();
const pitstops = require('./pitstop');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});
router.use('/pitstops', pitstops);

module.exports = router;
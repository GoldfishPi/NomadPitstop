const express = require('express');
const router = express.Router();
const model = require('./../models/pitstop');

router.post('/', (req, res, next) => {
    model
        .find()
        .sort({ id: -1 })
        .limit(1)
        .then(entry => {
            let newPitstop = new model({
                name: req.body.name,
                notes: req.body.notes,
                connection: req.body.connection,
                longitude: req.body.longitude,
                latitude: req.body.latitude,
                id: entry[0] ? entry[0].id +1 : 0
            });

            newPitstop.save().then(function(model, b) {
                if (!model.errors) {
                    res.json({ success: true, msg: 'Pitstop added' });
                } else {
                    res.json({ success: false, msg: 'Failed to add pitstop' });
                }
            });
        });
});
router.get('/', (req, res, next) => {
    model.find({}, (err, pitstops) => {
        res.json(pitstops);
    });
});
router.get('/:id', (req, res, next) => {
    console.log('id',typeof req.params.id)
    model
        .findOne({ id: Number(req.params.id) }, (err, pitstop) => {
            console.log('got this stop yo', pitstop)
            res.json(pitstop);
        });
});
module.exports = router;

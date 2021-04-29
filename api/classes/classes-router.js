const router = require('express').Router();

const Classes = require('./classes-model');
const restricted = require('../middeware/restricted');
const checkRole = require('../middeware/checkRole');
const checkClassPayload = require('../middeware/checkClassPayload');

router.get("/", (req, res) => {
    Classes.find()
        .then(classes => {
            res.status(200).json(classes);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({message: "Error retrieving classes"});
        });
});

router.get("/:id", (req, res) => {
    const id = req.params;

    Classes.findById(id)
        .then(classes => {
            res.status(200).json({classes});
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({message: "Error retrieving this class"});
        });
});

module.exports = router;
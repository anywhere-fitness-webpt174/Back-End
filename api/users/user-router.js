const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../middeware/restricted');
const checkRole = require('../middeware/checkRole');

router.get("/", restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({message: "Error retrieving Users", err: err});
        });
});

router.get("/:id", restricted, (req, res) => {
    const id = req.params;

    Users.findById(id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({message: "Error retrieving this User", err: err})
        });
});

module.exports = router;
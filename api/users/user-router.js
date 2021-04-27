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

router.post("/:id", restricted, (req, res) => {
    const userId = req.params;
    const classId = req.body;

    Users.addClassToSchedule(userId, classId)
        .then(res => {
            res.status(202).json({message: "Added to your schedule!", res: res});
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({message: "Error adding class to your schedule", err: err});
        });
});
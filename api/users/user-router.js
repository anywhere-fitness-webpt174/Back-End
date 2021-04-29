const router = require('express').Router();

const Users = require('./users-model');
// const restricted = require('../middeware/restricted');

router.get("/", async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Error retrieving the users", ...err});
    };
});

router.get("/:id", (req, res) => {
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
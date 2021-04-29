const router = require('express').Router();

const Classes = require('./classes-model');
// const restricted = require('../middeware/restricted');
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
    const id = req.params.id;

    Classes.findById(id)
        .then(classes => {
            res.status(200).json({classes});
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({message: "Error retrieving this class"});
        });
});

router.delete("/:id", async (req, res) => {
    try {
    await Classes.deleteById(req.params.id);
    res.status(200).json({message: "Class has been deleted"});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Error deleting class"});
    };
});

router.post("/", checkClassPayload, async (req, res) => {
    try {
        const newClass = await Classes.addClass(req.body);
        res.status(201).json({NewClass: newClass});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Error creating new class", ...err});
    };
});


module.exports = router;
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../secrets');

const router = require('express').Router();

const Clients = require('../clients/users-model');

const checkRegisterPayload = require('../middeware/checkRegisterPayload');
const checkLoginPayload = require('../middeware/checkLoginPayload');


router.post("/register", checkRegisterPayload, async (req, res) => {
    const credentials = req.body;

    try {
        const hash = bcryptjs.hashSync(credentials.password, 10);
        credentials.password = hash;

        const client = await Clients.addClient(credentials);
        const token = generateToken(client);

        res.status(201).json({data: client, token });   
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Error creating new client", ...err});
    };
});


router.post("/login", checkLoginPayload, async (req, res) => {
    const { username, password } = req.body;

    try {
        const [client] = await Clients.findBy({ username: username });
        if(client && bcryptjs.compareSync(password, client.password)) {
            const token = generateToken(client);
            res.status(200).json({message: `Welcome back ${username}`});
        } else {
            res.status(401).json({message: "Invalid credentials"});
        };
    } catch (error) {
        res.status(500).json({message: "Error logging in", ...err});
    };
});


function generateToken(client) {
    const payload = {
        subject: client.id,
        username: client.username,
    };

    const options = {
        expiresIn: "1d"
    };

    const token = jwt.sign(payload, secrets.jwtSecret, options);

    return token;
};


module.exports = router;
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../secrets');

const router = require('express').Router();

const Users = require('../users/users-model');

const checkRegisterPayload = require('../middeware/checkRegisterPayload');
const checkLoginPayload = require('../middeware/checkLoginPayload');


router.post("/register", checkRegisterPayload, async (req, res) => {
    const credentials = req.body;

    try {
        const hash = bcryptjs.hashSync(credentials.user_password, 10);
        credentials.user_password = hash;

        const client = await Users.addClient(credentials);
        const token = generateToken(client);

        res.status(201).json({data: client, token });   
    } catch (err) {
        console.log(secret.jwtSecret);
        console.log(err);
        res.status(500).json({message: "Error creating new client", ...err});
    };
});


router.post("/login", checkLoginPayload, async (req, res) => {
    const { user_username, user_password } = req.body;

    try {
        const [client] = await Users.findBy({ user_username: user_username });
        if(client && bcryptjs.compareSync(user_password, client.user_password)) {
            const token = generateToken(client);
            res.status(200).json({message: `Welcome back ${user_username}`}, token, client.user_id, client.role);
        } else {
            res.status(401).json({message: "Invalid credentials"});
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error logging in", ...error});
    };
});

router.get('/signout', (req, res) => {
    req.logout();
    if (!req.session) {
        req.session.destroy(function(err) {
        res.status(200).json({message: "Logged out successfully"});
      });
    }
    else {
      res.status(500).json({message: "Error logging out"});
    };
});


function generateToken(user) {
    const payload = {
        subject: user.user_id,
        user_username: user.user_username,
        user_rolename: user.user_name
    };

    const options = {
        expiresIn: "1d"
    };

    const token = jwt.sign(payload, secret.jwtSecret, options);

    return token;
};


module.exports = router;
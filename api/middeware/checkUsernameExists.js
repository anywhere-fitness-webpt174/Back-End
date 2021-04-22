const db = require('../../data/dbConfig');

const checkUsernameExists = async (req, res, next) => {
    const clients = await db('clients');
    const newUsername = req.body;

    for(let i = 0; i<clients.length; i++) {
        if(newUsername.username === clients[i].username) {
            res.status(400).json({message: "Username is already taken"});
        } else {
            next();
        }
    }
};

module.exports = { checkUsernameExists };
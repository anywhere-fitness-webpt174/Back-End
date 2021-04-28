module.exports = async (req, res, next) => {
    const newClient = req.body;

    if(newClient.user_name === '' || !newClient.user_name) {
        res.status(400).json({message: "Credentials Incomplete"});
    } else if(!newClient.user_username || newClient.user_username === '') {
        res.status(400).json({message: "Credentials Incomplete"});
    } else if(!newClient.user_email || newClient.user_email === '') {
        res.status(400).json({message: "Credentials Incomplete"});
    } else if(!newClient.user_password || newClient.user_password === '') {
        res.status(400).json({message: "Credentials Incomplete"});
    } else {
        next();
    };
};

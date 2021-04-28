module.exports = async (req, res, next) => {
    const creds = req.body;

    if(!creds.user_username || creds.user_username === '') {
        res.status(400).json({message: "Missing username and/or password"});
    } else if(!creds.user_password || creds.user_password === '') {
        res.status(400).json({message: "Missing username and/or password"});
    } else {
        next();
    }
};
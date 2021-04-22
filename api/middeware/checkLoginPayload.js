module.exports = async (req, res, next) => {
    const creds = req.body;

    if(!creds.username || creds.username === '') {
        res.status(400).json({message: "Missing username and/or password"});
    } else if(!creds.password || creds.password === '') {
        res.status(400).json({message: "Missing username and/or password"});
    } else {
        next();
    }
};
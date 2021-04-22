const checkRegisterPayload = async (req, res, next) => {
    const newClient = req.body;

    if(newClient.name === '' || !newClient.name) {
        res.status(400).json({message: "Credentials Incomplete"});
    } else if(!newClient.username || newClient.username === '') {
        res.status(400).json({message: "Credentials Incomplete"});
    } else if(!newClient.email || newClient.email === '') {
        res.status(400).json({message: "Credentials Incomplete"});
    } else if(!newClient.password || newClient.password === '') {
        res.status(400).json({message: "Credentials Incomplete"});
    } else {
        next();
    };
};
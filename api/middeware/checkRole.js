function checkRole(desiredRole) {
    return function(req, res, next) {
        const realRole = req.decodedToken?.role;
        if(realRole === desiredRole || realRole === "instructor") {
            next();
        } else {
            res.status(403).json({message: "Not authorized"});
        };
    };
};
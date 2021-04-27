module.exports = async (req, res, next) => {
    const newClass = req.body;

    if(!newClass.class_name ||  newClass.class_name === '') {
        res.status(400).json({message: "Missing a Name for this class"});
    } else if(!newClass.class_type || newClass.class_type === '') {
        res.status(400).json({message: "Missing the Type of class"});
    } else if(!newClass.class_start || newClass.class_start === '') {
        res.status(400).json({message: "Missing class start time"});
    } else if(!newClass.class_duration || newClass.class_duration === '') {
        res.status(400).json({message: "Missing the duration time of this class"});
    } else if(!newClass.class_description || newClass.class_description === '') {
        res.status(400).json({message: "Missing the description for class"});
    } else {
        next();
    };
};
const User = require('../schemas/user');

module.exports = {
    addUser: (req, res) => {
        // Create user
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        // Save and return status
        newUser.save().then(()=>{
            res.json({status: "ok"});
        }).catch(()=>{
            res.json({status: "failed"});
        });
    }
};
const db = require("../models")


module.exports = {
    findAll: (req, res) => {
        db.User
        .findAll({})
        .then((data) => res.json(data))
    },

    findById: (req, res) => {
        db.User
        .findAll({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.json(data)
        })
    },
    
    create: (req, res) => {
        console.log(req.body)
        db.User
        .create({
            email: req.body.email,
            password: req.body.password,
            
        })
        .catch((err) => {
            if (err) {
                console.log(err)
            }
        })
        .then((data) => res.json(data))
        
    },
    
    destroy: (req, res) => {
        db.User
        .destroy({
            where: {
                id: req.params.id
            }
        }).then((data) => { 
            res.json(data)
        })
    }

} 
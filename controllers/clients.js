const db = require("../models")


module.exports = {
    findAll: (req, res) => {
        db.Client.findAll({})
        .then((data) => res.json(data))
    },

    findById: (req, res) => {
        db.Client.findAll({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.json(data)
        })
    },
    
    create: (req, res) => {
        console.log(req.body)
        db.Client.create({
            fullName: req.body.fullName,
            address: req.body.address,
            email: req.body.email
        })
        .catch((err) => {
            if (err) {
                console.log(err)
            }
        })
        .then((data) => res.json(data))
        
    },
    
    destroy: (req, res) => {
        db.Client.destroy({
            where: {
                id: req.params.id
            }
        }).then((data) => { 
            res.json(data)
        })
    }

} 
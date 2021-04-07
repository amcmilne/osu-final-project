const db = require("../models")


module.exports = {
    findAll: (req, res) => {
        db.Material.findAll({})
        .then((data) => res.json(data))
    },

    findById: (req, res) => {
        db.Material.findAll({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.json(data)
        })
    },
    
    create: (req, res) => {
        console.log(req.body)
        db.Material.create({
            name: req.body.name,
            pricePerUnit: req.body.pricePerUnit,
            
        })
        .catch((err) => {
            if (err) {
                console.log(err)
            }
        })
        .then((data) => res.json(data))
        
    },
    
    destroy: (req, res) => {
        db.Material.destroy({
            where: {
                id: req.params.id
            }
        }).then((data) => { 
            res.json(data)
        })
    }

} 
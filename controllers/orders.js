const db = require("../models")


module.exports = {
    findAll: (req, res) => {
        db.Order.findAll({})
        .then((data) => res.json(data))
    },

    findById: (req, res) => {
        db.Order.findAll({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.json(data)
        })
    },
    
    create: (req, res) => {
        console.log(req.body)
        db.Order.create({
            date: req.body.date,
            finalQuote: req.body.finalQuote,
            
        })
        .catch((err) => {
            if (err) {
                console.log(err)
            }
        })
        .then((data) => res.json(data))
        
    },
    
    destroy: (req, res) => {
        db.Order.destroy({
            where: {
                id: req.params.id
            }
        }).then((data) => { 
            res.json(data)
        })
    }

} 
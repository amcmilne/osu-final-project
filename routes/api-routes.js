const db = require("../models")

module.exports = (app) => {
    app.get("/api/clients/", (req, res) => {
        db.Client.findAll({})
        .then((data) => res.json(data))
    })

    app.get("/api/clients/:id", (req, res) => {
        db.Client.findAll({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.json(data)
        })
    })
    
    app.post("/api/clients/", (req, res) => {
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
        
    })
    
    app.delete("/api/clients/:id", (req, res) => {
        db.Client.destroy({
            where: {
                id: req.params.id
            }
        }).then((data) => { 
            res.json(data)
        })
    })
    
    app.get("/api/materials/", (req, res) => {
        db.Material.findAll({})
        .then((data) => res.json(data))
    })
    
    app.get("/api/materials/:id", (req, res) => {
        db.Material.findAll({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.json(data)
        })
        
    app.post("/api/materials/:id", (req, res) => {
        console.log(req.body)
        db.Material.create({
            
        })
        .catch((err) => {
            if (err) {
                console.log(err)
            }
        })
        .then((data) => res.json(data))
        
    })

    app.delete("/api/clients/:id", (req, res) => {
        db.Material.destroy({
            where: {
                id: req.params.id
            }
        }).then((data) => { 
            res.json(data)
        })
    })
    })
}
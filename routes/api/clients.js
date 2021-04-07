const router = require("express").Router()
const clientsController = require("../../controllers/clients")

router.route("/")
    .get(clientsController.findAll)
    .post(clientsController.create)

router.route("/:id")
    .get(clientsController.findById)
    .delete(clientsController.destroy)

module.exports = router
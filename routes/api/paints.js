const router = require("express").Router()
const paintsController = require("../../controllers/paints")

router.route("/")
    .get(paintsController.findAll)
    .post(paintsController.create)

router.route("/:id")
    .get(paintsController.findById)
    .delete(paintsController.destroy)

module.exports = router